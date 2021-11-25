import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// Runs on any start of the system: as api backend, as worker, as cli-command, etc.
export const onStart = () => {
  // To serialze BigInt as string in json
  if (typeof (BigInt.prototype as any).toJSON !== 'function') {
    (BigInt.prototype as any).toJSON = function() {
      return this.toString();
    };
  }
};
