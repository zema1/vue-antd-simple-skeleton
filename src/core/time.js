import tinydate from 'tinydate';

const humanize_pattern = tinydate(`{YYYY}.{MM}.{DD}`);
const chinese_pattern = tinydate(`{YYYY}年{MM}月{DD}日`);
const full_pattern = tinydate(`{YYYY}-{MM}-{DD} {HH}:{MM}`);

export default {
  humanize(value) {
    return humanize_pattern(new Date(value));
  },
  humanize_chinese(value) {
    return chinese_pattern(new Date(value));
  },
  humanize_full(value) {
    return full_pattern(new Date(value));
  }
};
