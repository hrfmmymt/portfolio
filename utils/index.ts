export const formatDate = ({ from, to }: { from: string; to: string }) => {
  const fromMm = Date.parse(from);
  const fromDate = new Date(fromMm);
  const fromYear = fromDate.getFullYear();
  const fromMonth = fromDate.getMonth() + 1;
  const fromFormatDate = fromYear + '-' + ('0' + fromMonth).slice(-2);

  const toMm = Date.parse(to);
  const toDate = new Date(toMm);
  const toYear = toDate.getFullYear();
  const toMonth = toDate.getMonth() + 1;
  const toFormatDate = toYear + '-' + ('0' + toMonth).slice(-2);

  return {
    from: fromFormatDate,
    to: toFormatDate,
  };
};
