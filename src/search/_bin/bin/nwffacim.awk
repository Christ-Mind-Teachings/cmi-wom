#
# if we find the regex then we keep the one line paragraph
# - indicated this by returning 0
#
# return 1 if we want to discard the paragraph
#
function discardParagraph(p) {
  IGNORECASE = 1
  if (match(p,/start here/)) {
    return 1
  }
  if (match(p,/start the/)) {
    return 1
  }
  if (match(p,/what\?/)) {
    return 1
  }
  if (match(p,/read/)) {
    return 1
  }
  if (match(p,/yes/)) {
    return 1
  }
  if (match(p,/okay/)) {
    return 1
  }
  if (match(p,/thank you/)) {
    return 1
  }
  if (match(p,/exactly/)) {
    return 1
  }
  if (match(p,/of course/)) {
    return 1
  }
  if (match(p,/oh/)) {
    return 1
  }
  if (match(p,/continue/)) {
    return 1
  }
  if (match(p,/I see/)) {
    return 1
  }
  if (match(p,/I say/)) {
    return 1
  }
  if (match(p,/I have/)) {
    return 1
  }
  if (match(p,/I can/)) {
    return 1
  }
  if (match(p,/good afternoon/)) {
    return 1
  }
  if (match(p,/good evening/)) {
    return 1
  }
  if (match(p,/welcome/)) {
    return 1
  }
  if (match(p,/makes sense/)) {
    return 1
  }
  if (match(p,/you say/)) {
    return 1
  }
  if (match(p,/want me/)) {
    return 1
  }
  if (match(p,/answer your/)) {
    return 1
  }
  if (match(p,/back up/)) {
    return 1
  }
  if (match(p,/a question/)) {
    return 1
  }
  if (match(p,/microphone/)) {
    return 1
  }
  if (match(p,/that is correct/)) {
    return 1
  }
  if (match(p,/right/)) {
    return 1
  }
  if (match(p,/can i/)) {
    return 1
  }
  if (match(p,/indeed/)) {
    return 1
  }
  if (match(p,/i mean/)) {
    return 1
  }
  if (match(p,/very true/)) {
    return 1
  }
  if (match(p,/hello/)) {
    return 1
  }
  if (match(p,/^now$/)) {
    return 1
  }
  if (match(p,/^so$/)) {
    return 1
  }
  if (match(p,/^again$/)) {
    return 1
  }
  if (match(p,/^you see$/)) {
    return 1
  }

  IGNORECASE = 0
  return 0
}

function bookId(book) {
  switch(book) {
    case "yaa":
      bid = 1
      break
    case "grad":
      bid = 2
      break
    case "2002":
      bid = 3
      break
    case "2003":
      bid = 4
      break
    case "2004":
      bid = 5
      break
    case "2005":
      bid = 6
      break
    case "2006":
      bid = 7
      break
    case "2007":
      bid = 8
      break
    case "2008":
      bid = 9
      break
    case "2009":
      bid = 10
      break
    case "2010":
      bid = 11
      break
    case "2011":
      bid = 12
      break
    case "2012":
      bid = 13
      break
    case "2013":
      bid = 14
      break
    case "2014":
      bid = 15
      break
    case "2015":
      bid = 16
      break
    case "2016":
      bid = 17
      break
    case "2017":
      bid = 18
      break
    default:
      bid = 0;
  }

  return bid
}

function unitId(book, unit) {
  switch(book) {
    case "yaa":
      if (unit == "foreword") {
        uid = 1
      }
      else if (unit == "afterword") {
        uid =  7000
      }
      else {
        # calc the uid - all based on dates in the form of
        # mmddyy[abcdef]
        part = 0
        mm = substr(unit, 1, 2)
        dd = substr(unit, 3, 2)
        if (length(unit) > 6) {
          part = substr(unit, length(unit), 1)
          pos = match("abcdefgh",part);
        }
        uid = mm * 1000 + dd * 10 + pos
      }
      break
    case "grad":
      # Authors Note
      if (unit == "g000002") {
        uid = 1
      }
      # Foreword
      else if (unit == "g000003") {
        uid = 2
      }
      else {
        mm = substr(unit, 2, 2)
        dd = substr(unit, 4, 2)
        uid = mm * 100 + dd
      }
      break
    default:
      # this is an acim study group book
      # use mmdd for the uid
      mm = substr(unit, 1, 2)
      dd = substr(unit, 3, 2)
      uid = mm * 100 + dd
      break
  }

  return uid
}

BEGIN {
  i = 0
  p = 0
  l = -1
  fm = 0
  inp = false
  needComma = "n"

  if (debug == 0) {
    printf "{\n  \"source\": \"%s\",\n  \"book\": \"%s\",\n  \"unit\": \"%s\",\n", source, book, unit
    printf "  \"paragraph\": [\n"
  }
}
/---/ {
  if (fm == 0) {
    fm = 1
  }
  else if (fm == 1) {
    fm = 2
  }
  next
}
$1 ~ /##/ {
  # questions
  next
}
/^<div/ || /^<\/div/ {
  # found in acim study group transcripts
  next
}
/^\[\^/ {
  # a footnote reference
  next
}
/^\r$/ || /^$/ || /^\s*$/ || /^>$/ || /^>\s*$/ {
  if (debug == 1) {
    for (line in lines) {
      text = sprintf("%s %s", text, lines[line])
    }
    printf "%s\n\n", tolower(text)
    l = -1
    text = ""
    delete lines
    p++
    next
  }

  if (l > -1) {
    len = length(lines)
    discard = 0
    if (len == 1) {
      #found = discardParagraph(lines[0])
      #if (found > 0) {
      #  discard = 1
      #}

      # don't index one line paragraphs - most are banter
      # discardParagraph determines if a one liner is kept
      discard = discardParagraph(lines[0])
    }
    printf "  %s{\n", needComma == "y" ? "," : ""
    printf "    \"discard\": %u,\n", discard
    printf "    \"source\": \"%s\",\n", source
    printf "    \"book\": \"%s\",\n", book
    printf "    \"bid\": %s,\n", bookId(book)
    printf "    \"unit\": \"%s\",\n", unit
    printf "    \"uid\": %s,\n", unitId(book, unit)
    printf "    \"pid\": %s,\n", p
    for (line in lines) {
      raw = lines[line]
      # some files contain 0x0d line terminators, remove them
      gsub(/\r/, "", raw)
      # remove html elements
      gsub(/\&hellip;/, "", raw)
      gsub(/\&ldquo;/, "", raw)
      gsub(/\&rdquo;/, "", raw)
      gsub(/\&lsquo;/, "", raw)
      gsub(/\&rsquo;/, "", raw)
      gsub(/\&ndash;/, " ", raw)
      gsub(/\&mdash;/, " ", raw)
      # remove <p></p> 
      gsub(/<\/?p[^>]*>/,"",raw)
      # remove <span></span> 
      gsub(/<\/?span[^>]*>/,"",raw)
      # remove punctuation
      gsub(/[\[\])(*>.,!?;:‘’'"“”/\\]/,"",raw)
      #remove 0xa0
      gsub(/ /,"",raw)
      #remove 0x09
      gsub(/	/," ",raw)
      #remove \%u2026 (elipsis)
      gsub(/…/," ",raw)
      # convert dash to space 
      gsub(/[-—]/," ",raw)
      # remove footnotes: [^1]
      gsub(/\^[[:digit:]]/, "", raw)
      text = sprintf("%s %s", text, raw)
    }
    # remove leading space
    gsub(/^ */, "", text)
    # collapse two spaces into one
    gsub(/  */," ",text)
    # remove underscores - text bracketed by __xxx__ are bolded by markdown
    gsub(/__/,"",text)
    printf "    \"text\": \"%s\"\n  }\n", tolower(text)
    l = -1
    text = ""
    delete lines
    needComma = "y"
    p++
  }
  next
}
{
  # only interested in lines after front matter (fm) removed
  # - that's when fm=2
  if (fm == 2) {
    l++
    lines[l] = $0
  }
}
END {
  if (debug == 0) {
    printf "]}\n"
  }
}

