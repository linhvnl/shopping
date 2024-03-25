// function custom hook - work with Local Storage
const useIntLanguage = () => {
  // xử lý render số thứ tự
  const toUseNumOrderCol = (num) => (num + 1).toString().padStart(2, "0");

  // định dạng number
  const toUseIntlNumber = (number) =>
    new Intl.NumberFormat("vi-VN").format(number);

  // định dạng currency
  const toUseIntlCurrency = (number) =>
    new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(number);

  // xử lý render value date từ mảng dữ liệu
  const toUseIntlDateRange = (dateStart, dateEnd) =>
    new Intl.DateTimeFormat("vi-VN").formatRange(
      new Date(dateStart),
      new Date(dateEnd)
    );

  // trả lại 1 object chứa các phương thức
  return {
    toUseNumOrderCol,
    toUseIntlNumber,
    toUseIntlCurrency,
    toUseIntlDateRange,
  };
};

export default useIntLanguage;

/*
// ____________________
// sử dụng CUSTOM HOOK
// ____________________
// import CUSTOM HOOK
import useIntLanguage from "../../hooks/use-intlanguage";

// dùng Custom Hook để format number
const { toUseNumOrderCol,
    toUseIntlNumber,
    toUseIntlDateRange } = useIntLanguage();

*/
