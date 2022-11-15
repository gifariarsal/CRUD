const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/bootcamp', (req, res) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO bootcamp SET ?';

    koneksi.query(querySql, data, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

app.get('/api/bootcamp', (req, res) => {
    const querySql = 'SELECT * FROM bootcamp';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

app.put('/api/bootcamp/:id', (req, res) => {
    const data = { ...req.body };
    const querySearch = 'SELECT * FROM bootcamp WHERE id = ?';
    const queryUpdate = 'UPDATE bootcamp SET ? WHERE id = ?';

    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        if (rows.length) {
            koneksi.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                res.status(200).json({ success: true, message: 'Berhasil update data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

app.delete('/api/bootcamp/:id', (req, res) => {
    const querySearch = 'SELECT * FROM bootcamp WHERE id = ?';
    const queryDelete = 'DELETE FROM bootcamp WHERE id = ?';

    koneksi.query(querySearch, req.params.id, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        if (rows.length) {
            koneksi.query(queryDelete, req.params.id, (err, rows, field) => {
                if (err) {
                    return res.status(500).json({ message: 'Ada kesalahan', error: err });
                }

                res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
            });
        } else {
            return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
        }
    });
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
