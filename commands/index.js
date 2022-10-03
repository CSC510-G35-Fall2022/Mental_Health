import JournalCommand, { getData as getJournalData } from "./journal.js";
import PingCommand, { getData as getPingData } from "./ping.js";

export { JournalCommand, PingCommand };

export default [getJournalData, getPingData];
