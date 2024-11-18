# Setting global options for chunks
knitr::opts_chunk$set(
  message = FALSE,
  warning = FALSE,
  echo = TRUE,
  fig.width = 7,
  fig.asp = 0.8,
  fig.align = "center"
)

# Setting R options
options(
  dplyr.print_min = 6,
  dplyr.print_max = 6,
  width = 80
)

# Setting ggplot2 theme
ggplot2::theme_set(ggplot2::theme_bw())
