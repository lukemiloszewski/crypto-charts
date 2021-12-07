import { timeFormat } from 'd3-time-format';
import { bisector } from "d3-array";
import { BitcoinData } from '../types/bitcoinData';

export const formatDate = timeFormat("%b %d, '%y");
export const getDate = (d: BitcoinData) => new Date(d.time);
export const bisectDate = bisector<BitcoinData, Date>((d) => new Date(d.time)).left;
