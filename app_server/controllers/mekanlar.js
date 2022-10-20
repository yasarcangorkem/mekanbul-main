var express = require('express');
var router = express.Router();
const anaSayfa = function(req, res, next) {
    res.render('anasayfa', {
        "baslik": 'Anasayfa',
        "sayfaBaslik": {
            "siteAd": "MekanBul",
            "slogan": "Civardaki Mekanları Keşfet!"
        },
        "mekanlar": [{
                "ad": "Dürümhane",
                "adres": "Modernevler",
                "puan": "5",
                "mesafe": "1km",
                "imkanlar": ["Adana Dürüm", "Tavuk Şiş", "Salata"]
            },
            {
                "ad": "Şehzade Döner",
                "adres": "Fatih Mahallesi",
                "puan": "3",
                "mesafe": "3km",
                "imkanlar": ["Tavuk Döner", "Pide", "Lahmacun"]
            }
        ]
    });
}
const mekanBilgisi = function(req, res, next) {
    res.render('mekanbilgisi', {
        "baslik": "Mekan Bilgisi",
        "mekanBaslik": "Dürümhane",
        "mekanDetay": {
            "ad": "Dürümhane",
            "adres": "Modernevler",
            "puan": "5",
            "saatler": [{
                    "gunler": "Pazartesi-Cuma",
                    "acilis": "09:00",
                    "kapanis": "23.00",
                    "kapali": false
                },
                {
                    "gunler": "Cumartesi-Pazar",
                    "acilis": "10:00",
                    "kapanis": "22.00",
                    "kapali": false
                }
            ],
            "imkanlar": ["Tavuk Döner", "Pide", "Lahmacun"],
            "koordinatlar": {
                "enlem": "37.7",
                "boylam": "30.5"
            },
            "yorumlar": [{
                    "yorumYapan": "Yaşarcan",
                    "puan": "5",
                    "tarih": "20 Ekim 2022",
                    "yorumMetni": "BU ADAM AYNI BEN YA, ŞEF BAYA İYİ"
                },
                {
                    "yorumYapan": "Emil",
                    "puan": "2",
                    "tarih": "31 Ağustos 2022",
                    "yorumMetni": "Azarbayjanda daha güzelini yedim"
                }
            ]
        }
    });
}
const yorumEkle = function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum ekle' });
}
module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}