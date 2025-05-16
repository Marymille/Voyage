# Charger les packages
library(magrittr)
library(exifr)
library(magick)
library(dbscan)
library(geosphere)
library(leaflet)
library(htmlwidgets)
library(jsonlite)

# Chemins
photo_dir <- "C:/wamp64/www/ma-carte/images"
output_html <- "C:/wamp64/www/ma-carte/carte_leaflet.html"

# Lire EXIF
photos <- read_exif(photo_dir, recursive = TRUE)
photos_gps <- photos[, c("SourceFile", "GPSLongitude", "GPSLatitude")]

# Redimensionner
resize_image <- function(image_path, output_path) {
  img <- image_read(image_path)
  img_resized <- image_scale(img, "150x")
  image_write(img_resized, output_path)
}

# Dossier images
if (!dir.exists(paste0(photo_dir, "/images"))) {
  dir.create(paste0(photo_dir, "/images"))
}

for (i in 1:nrow(photos_gps)) {
  original_path <- file.path(photo_dir, photos_gps$SourceFile[i])
  resized_path <- file.path(photo_dir, "images", basename(photos_gps$SourceFile[i]))
  resize_image(original_path, resized_path)
  photos_gps$rel_path[i] <- paste0("images/", basename(photos_gps$SourceFile[i]))
}

# Clustering DBSCAN
coords <- as.matrix(photos_gps[, c("GPSLongitude", "GPSLatitude")])
dist_matrix <- distm(coords, fun = distHaversine)
clusters <- dbscan(dist_matrix, eps = 10000, minPts = 1)
photos_gps$cluster <- clusters$cluster

# Créer la carte
m <- leaflet() %>%
  addTiles() %>%
  addCircleMarkers(
    lng = photos_gps$GPSLongitude, 
    lat = photos_gps$GPSLatitude,
    radius = 5, 
    color = ~factor(cluster), 
    popup = ~paste0(
      "<div style='text-align: center;'>",
      "<img src='", rel_path, "' style='width:200px; height:auto; border-radius:8px;'><br><br>",
      "<a href='galerie.html?cluster=", cluster, "' target='_blank'>Accéder à la galerie ➡️</a>",
      "</div>"
    )
  ) %>%
  addLegend("bottomright", pal = colorFactor(palette = "Set1", domain = photos_gps$cluster),
            values = photos_gps$cluster, title = "Cluster", opacity = 1)

saveWidget(m, file = output_html, selfcontained = TRUE)

cat("La carte a été générée et sauvegardée dans", output_html, "\n")

# Générer clusters.json
cluster_list <- split(photos_gps$rel_path, photos_gps$cluster)
write_json(cluster_list, path = "C:/wamp64/www/ma-carte/clusters.json", pretty = TRUE, auto_unbox = TRUE)

cat("clusters.json généré dans C:/wamp64/www/ma-carte/\n")

