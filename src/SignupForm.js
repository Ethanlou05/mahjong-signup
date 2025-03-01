import { useState } from "react";
import supabase from "./supabaseClient";

const signupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mahjong_type: "",
    experience: "",
    language: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.from("signupform").insert([formData]);

    if (error) {
      alert("Signup failed!");
      console.error(error);
    } else {
      alert("Signup successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Mahjong Type:
        <select name="mahjong_type" value={formData.mahjong_type} onChange={handleChange} required>
          <option value="">Select a type</option>
          <option value="Riichi">Riichi</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Chinese Official">Chinese Official</option>
        </select>
      </label>

      <label>
        Experience Level:
        <select name="experience" value={formData.experience} onChange={handleChange} required>
          <option value="">Select experience level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </label>

      <label>
        Preferred Language:
        <select name="language" value={formData.language} onChange={handleChange} required>
          <option value="">Select a language</option>
          <option value="English">English</option>
          <option value="Mandarin">Mandarin</option>
          <option value="Cantonese">Cantonese</option>
        </select>
      </label>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default signupform;
