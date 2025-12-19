"use client";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";

export default function BlobUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");


  const AZURE_STORAGE_SAS_URL = "TU_SAS_URL";

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    setStatus("Subiendo archivo...");
    try {
      const blobServiceClient = new BlobServiceClient(AZURE_STORAGE_SAS_URL);
      const containerClient = blobServiceClient.getContainerClient("");
      const blockBlobClient = containerClient.getBlockBlobClient(file.name);
      await blockBlobClient.uploadBrowserData(file);
      setStatus("Archivo subido correctamente");
    } catch (err) {
      setStatus("Error al subir archivo: " + (err as any).message);
    }
  };

  return (
    <div style={{ marginTop: 24 }} className="flex items-center gap-2">
      <input type="file" accept=".txt" onChange={handleFileChange} />
      <div>{status}</div>
    </div>
  );
}