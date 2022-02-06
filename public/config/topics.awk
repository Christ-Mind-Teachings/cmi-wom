{
  split($0, a, ":")
  printf "{\n"
  printf "  \"title\": \"%s\",\n", a[1]
  printf "  \"url\": \"/t/wom/topics/%s/\"\n", a[2]
  printf "},\n"
}

