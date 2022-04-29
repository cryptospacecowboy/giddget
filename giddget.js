// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: magic;
// ----------------------------------------------------------
// The Giddget - A Giddy Price Widget for iOS
// Space Cowboy's Tip Jar: 0x7E217ed7c2b03ec4bb163341875fd7cA5e4c726e
// TommyTippie's Tip Jar: 0x8b776F21aD7389Ce1c37913d696c2Eb778771c1F
// GiveSendGiddy's Tip Jar: 0x032a16A336D5949e784feFeAa173744De632001B
// ----------------------------------------------------------

// Theme Options - 'light' or 'dark'
const theme = 'light'
const bgColor = (theme == 'light') ? Color.white() : Color.black()
const textColor = (theme == 'light') ? Color.black() : Color.white()
const logo = (theme == 'light') ? 'https://i.ibb.co/S5W7pQC/giddy-logo-horizontal.png' : 'https://i.ibb.co/2WLSW3M/giddy-logo-horizontal-white.png'

// Get Current Price
const url = 'https://us-central1-fifth-liberty-317301.cloudfunctions.net/GetGiddyPrice'
const req = new Request(url)
const price = await req.loadString()

// Build Widget
let widget = new ListWidget()
widget.useDefaultPadding()
widget.backgroundColor = bgColor

let titleText = widget.addText('GIDDY COIN')
titleText.textColor = textColor
titleText.font = Font.semiboldMonospacedSystemFont(10)
titleText.textOpacity = 0.5
titleText.centerAlignText()

widget.addSpacer(25)

let alertText = widget.addText('$'+Number(price).toFixed(4))
alertText.textColor = textColor
alertText.font = Font.boldMonospacedSystemFont(24)
alertText.centerAlignText()

let alertTitle = widget.addText("LAST PRICE")
alertTitle.textColor = textColor
alertTitle.font = Font.semiboldMonospacedSystemFont(10)
alertTitle.textOpacity = 0.5
alertTitle.centerAlignText()

widget.addSpacer(25)

let imgReq = new Request(logo)
let image = await imgReq.loadImage()
let widgetImage = widget.addImage(image)
widgetImage.imageSize = new Size(70,15)
widgetImage.centerAlignImage()

// Display Widget
widget.presentSmall()
Script.setWidget(widget)
Script.complete()
