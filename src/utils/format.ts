import numeral from 'numeral'

export const formatNumer = (num: number) => {
  return numeral(num).format('0,0')
}
