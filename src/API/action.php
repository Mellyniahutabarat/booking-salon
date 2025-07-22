<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization');
header('Content-Type: application/json; charset=UTF-8');

include "db_config.php"; // pastikan file ini ada dan benar

$postjson = json_decode(file_get_contents('php://input'), true);
$aksi = isset($postjson['aksi']) ? strip_tags($postjson['aksi']) : null;

$data = array();

if (!$aksi) {
    echo json_encode(['success' => false, 'msg' => 'Aksi tidak dikirim']);
    exit;
}

switch ($aksi) {

    case "add_appoitment":
        $nama = filter_var($postjson['nama'], FILTER_SANITIZE_STRING);
        $nohp = filter_var($postjson['nohp'], FILTER_SANITIZE_STRING);
        $alamat = filter_var($postjson['alamat'], FILTER_SANITIZE_STRING);
        $jeniskelamin = filter_var($postjson['jeniskelamin'], FILTER_SANITIZE_STRING);
        $treatment = filter_var($postjson['treatment'], FILTER_SANITIZE_STRING);
        $waktu = filter_var($postjson['waktu'], FILTER_SANITIZE_STRING);
        $jumlahbookingan = filter_var($postjson['jumlahbookingan'], FILTER_SANITIZE_STRING);
        $handleby = filter_var($postjson['handleby'], FILTER_SANITIZE_STRING);

        try {
            $sql = "INSERT INTO appoitment (nama, nohp, alamat, jeniskelamin, treatment, waktu, jumlahbookingan, handleby)
                    VALUES (:nama, :nohp, :alamat, :jeniskelamin, :treatment, :waktu, :jumlahbookingan, :handleby)";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':nama', $nama);
            $stmt->bindParam(':nohp', $nohp);
            $stmt->bindParam(':alamat', $alamat);
            $stmt->bindParam(':jeniskelamin', $jeniskelamin);
            $stmt->bindParam(':treatment', $treatment);
            $stmt->bindParam(':waktu', $waktu);
            $stmt->bindParam(':jumlahbookingan', $jumlahbookingan);
            $stmt->bindParam(':handleby', $handleby);
            $stmt->execute();

            echo json_encode(['success' => true, 'msg' => 'Data berhasil disimpan.']);
        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'msg' => $e->getMessage()]);
        }
        break;

    case "getdata":
        $limit = filter_var($postjson['limit'], FILTER_SANITIZE_NUMBER_INT);
        $start = filter_var($postjson['start'], FILTER_SANITIZE_NUMBER_INT);

        try {
            $sql = "SELECT * FROM appoitment ORDER BY id DESC LIMIT :start, :limit";
            $stmt = $pdo->prepare($sql);
            $stmt->bindParam(':start', $start, PDO::PARAM_INT);
            $stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
            $stmt->execute();

            $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
            foreach ($rows as $row) {
                $data[] = [
                    'id' => $row['id'],
                    'nama' => $row['nama'],
                    'nohp' => $row['nohp'],
                    'alamat' => $row['alamat'],
                    'jeniskelamin' => $row['jeniskelamin'],
                    'treatment' => $row['treatment'],
                    'waktu' => $row['waktu'],
                    'jumlahbookingan' => $row['jumlahbookingan'],
                    'handleby' => $row['handleby']
                ];
            }

            echo json_encode(['success' => true, 'result' => $data]);
        } catch (PDOException $e) {
            echo json_encode(['success' => false, 'msg' => $e->getMessage()]);
        }
        break;

    default:
        echo json_encode(['success' => false, 'msg' => 'Aksi tidak dikenali']);
}