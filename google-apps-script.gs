/**
 * RSVP collector for the #PC2026 wedding invitation.
 *
 * Setup (about 3 minutes):
 *  1. Create a new Google Sheet (e.g. "PC2026 RSVPs").
 *  2. In the sheet: Extensions > Apps Script. Delete the sample code and paste this whole file. Save.
 *  3. Deploy > New deployment > type: "Web app"
 *        Execute as:      Me
 *        Who has access:  Anyone
 *     Click Deploy, approve the permissions, then COPY the "Web app URL".
 *  4. Paste that URL into CONFIG.rsvp.endpoint at the top of script.js.
 *  5. Whenever you change this script later, use Deploy > Manage deployments > Edit > New version.
 *
 * Every RSVP becomes a new row in a tab called "RSVPs".
 */

const SHEET_NAME = 'RSVPs';
const HEADERS = ['Received (Lagos)', 'Full name', 'Phone', 'Attending', 'Guests', 'Message', 'Invited as (?guest=)'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!data.name || !data.phone) return json_({ ok: false, error: 'missing fields' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#4A1B4F').setFontColor('#E8D08A');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      Utilities.formatDate(new Date(), 'Africa/Lagos', 'yyyy-MM-dd HH:mm:ss'),
      safe_(data.name, 80),
      "'" + safe_(data.phone, 20),          // leading ' keeps leading zeros (0803...)
      data.attending === 'Yes' ? 'Yes' : 'No',
      Number(data.guests) || 0,
      safe_(data.message, 500),
      safe_(data.invitedAs, 60)
    ]);
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Opening the Web app URL in a browser just confirms it is live.
function doGet() {
  return json_({ ok: true, message: 'PC2026 RSVP endpoint is live' });
}

// Stops text like =HYPERLINK(...) from being run as a spreadsheet formula.
function safe_(value, max) {
  let s = String(value == null ? '' : value).trim().slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
