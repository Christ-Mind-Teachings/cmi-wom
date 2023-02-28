{
  split($0, a, ":")
  if (a[3] == "yes") {
    printf "{\n"
    printf "  \"title\": \"%s\",\n", a[1]
    printf "  \"url\": \"/t/wom/topics/%s/\"\n", a[2]
    printf "},\n"
  }
}

