import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("Uygulama doğru şekilde çalışıyor mu?", async () => {
  render(<App />);

  // gerekli bileşenler
  const nameInp = screen.getByLabelText("İsim");
  const mailInp = screen.getByLabelText("Email");
  const button = screen.getByRole("button", {
    name: "Kullanıcı Ekle",
  });

  // formu doldur
  user.type(nameInp, "elif");
  user.type(mailInp, "elss@gmail.com");

  // formu gönder
  user.click(button);

  // isim değerine karşılık gelen bir tablo hücresi ekran basıldı mı?
  // state güncellenmesi sonucu ekrna basıldığınıdan
  // async elemanları getiren find komutnu kullandık
  await screen.findByRole("cell", { name: "elif" });
  await screen.findByRole("cell", { name: "elss@gmail.com" });
});
