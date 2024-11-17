

# setting the knitr options for each chunk globally
knitr::opts_chunk$set(
  message = FALSE,
  warning = FALSE,
  tidy.opts = list(
    arrow = TRUE,
    width.cutoff = 80
  ),
  tidy = TRUE,
  collapse = TRUE,
  knitr.duplicate.label = "allow",
  echo = TRUE,
  fig.width = 7,
  fig.asp = 0.8,
  # pdf mode
  fig.align = "center",
  fig.show =  "hold"
)
#
# knitr::opts_template$set(fullwidth = list(
#   fig.width = 10, fig.height = 8,
#   fig.retina = 2, out.width = '100%'
# ))

options(
  dplyr.print_min = 6,
  dplyr.print_max = 6,
  pillar.max_footer_lines = 2,
  pillar.min_chars = 15,
  stringr.view_n = 6,
  pillar.bold = TRUE,
  width = 80 #> comment
)

ggplot2::theme_set(ggplot2::theme_bw())
