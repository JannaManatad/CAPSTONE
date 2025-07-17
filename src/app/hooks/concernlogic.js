import { useState } from "react";

export default function useConcernForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    file: null,
    issue: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm(f =>
      name === "file"
        ? { ...f, file: files[0] }
        : { ...f, [name]: value }
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Here you can send the form data to your backend if needed
    setShowModal(true);
    setForm({
      name: "",
      email: "",
      contact: "",
      file: null,
      issue: "",
    });
  };

  const closeModal = () => setShowModal(false);

  return {
    form,
    showModal,
    handleChange,
    handleSubmit,
    closeModal,
  };
}