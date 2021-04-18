// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("Home.html", "Untitled Page", "Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Copyright 2021 - ZEROCLOTH   ", "");
   this[database_length++] = new SearchPage("Page-2.html", "Untitled Page", "Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Copyright 2021 - ZEROCLOTH   ", "");
   this[database_length++] = new SearchPage("Clothing.html", "Untitled Page", "Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Rp.125.000  Kategori Kaos  Copyright 2021 - ZEROCLOTH   ", "");
   this[database_length++] = new SearchPage("About-.html", "Untitled Page", "Copyright 2021 - ZEROCLOTH  Usaha penyablonan digital serta pemasaran pakaian ini ditujukan untuk masyarakat atau orang orang yang mempunyai kemauan untuk berwiraswata dan mendukung fashion masyarakat atau muda-mudi, Usaha ini memberikan beberapa penawaran seperti   harga terjangkau dengan waktu yang cukup cepat, lebih kreatif dan innovatif dalam memberikan penawaran serta lebih banyak konsep dalam pengembangan usaha ini Dengan latar belakang tersebut maka tersiratlah dipikiran kami untuk membuat usaha yang bergerak dibidang Penyablonan digital Usaha yang rencananya akan kami beri nama  “ZERO CLOTH” ini dimaksudkan untuk memberikan pelayanan pada konsumen baik konsumen dari jasa sablon sampai individu yang ingin membeli kaos yang nyaman dan berkualitas tinggi tentunya dengan harga yang relative murah dengan kuota banyak  grosir  atau ecer   Copyright 2021 - ZEROCLOTH   ", "");
   this[database_length++] = new SearchPage("Login.html", "Untitled Page", "Copyright 2021 - ZEROCLOTH  Masukan Username dan Password anda  Belum punya akun?   ", "");
   this[database_length++] = new SearchPage("Daftar.html", "Untitled Page", "Copyright 2021 - ZEROCLOTH  Buat akun anda   ", "");
   this[database_length++] = new SearchPage("Pemesanan.html", "Untitled Page", "Copyright 2021 - ZEROCLOTH  PEMESANAN  Detail Produk  Data Anda   ", "");
   return this;
}
