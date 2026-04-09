const produk = [
  {
    nama: 'Extrait de Parfum',
    harga: 350000,
    gambar: 'assets/extrait.jpg',
  },
  {
    nama: 'Eau de Parfum (EDP)',
    harga: 180000,
    gambar: 'assets/edp.jpg',
  },
  {
    nama: 'Eau de Toilette (EDT)',
    harga: 150000,
    gambar: 'assets/edt.jpg',
  },
  {
    nama: 'Eau de Cologne (EDC)',
    harga: 120000,
    gambar: 'assets/edc.jpg',
  },
  {
    nama: 'Body Mist',
    harga: 90000,
    gambar: 'assets/bodymist.jpg',
  },
];

function tampilkanProduk() {
  const daftarProduk = document.getElementById('daftarProduk');
  daftarProduk.innerHTML = '';

  produk.forEach((item, index) => {
    daftarProduk.innerHTML += `
      <div class="card">
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>Rp ${item.harga.toLocaleString('id-ID')}</p>
        <div class="aksi">
          <button type="button" class="btn-beli" onclick="beliProduk('${item.nama}')">Beli</button>
          <button type="button" class="btn-hapus" onclick="hapusProduk(${index})">Hapus</button>
        </div>
      </div>
    `;
  });
}

function beliProduk(namaProduk) {
  const produkSelect = document.getElementById('produkSelect');

  if (produkSelect) {
    produkSelect.value = namaProduk;
  }

  const formSection = document.querySelector('.form-pembelian');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
  }

  alert('Produk dipilih: ' + namaProduk);
}

function hapusProduk(index) {
  produk.splice(index, 1);
  tampilkanProduk();
}

document.getElementById('formBeli').addEventListener('submit', function (e) {
  e.preventDefault();

  const nama = this.querySelector("input[type='text']").value.trim();
  const email = this.querySelector("input[type='email']").value.trim();
  const nomor = this.querySelector("input[type='number']").value.trim();
  const produkDipilih = document.getElementById('produkSelect').value;
  const metodeBayar = this.querySelector("input[name='bayar']:checked");
  const setuju = this.querySelector("input[type='checkbox']").checked;

  if (nama === '' || email === '' || nomor === '' || produkDipilih === '') {
    alert('Semua field wajib diisi.');
    return;
  }

  if (!email.includes('@')) {
    alert('Email tidak valid.');
    return;
  }

  if (isNaN(nomor) || Number(nomor) <= 0) {
    alert('Nomor HP harus berupa angka positif.');
    return;
  }

  if (nomor.length < 10) {
    alert('Nomor HP minimal 10 digit.');
    return;
  }

  if (!metodeBayar) {
    alert('Pilih metode pembayaran.');
    return;
  }

  if (!setuju) {
    alert('Kamu harus menyetujui syarat & ketentuan.');
    return;
  }

  alert('Pembelian berhasil untuk produk: ' + produkDipilih);
  this.reset();
});

tampilkanProduk();
