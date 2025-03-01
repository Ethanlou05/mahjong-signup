import { useState } from "react";
import supabase from "./supabaseClient";

function SignupForm() {
  const [name, setName] = useState("");
  const [mahjongType, setMahjongType] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  const [friends, setFriends] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("Signup").insert([
      { name, mahjongType, experience, language, friends },
    ]);

    if (error) {
      console.error("Signup failed:", error);
    } else {
      alert("Signup successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mahjong Signup</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Mahjong Type" value={mahjongType} onChange={(e) => setMahjongType(e.target.value)} required />
      <input type="text" placeholder="Experience Level" value={experience} onChange={(e) => setExperience(e.target.value)} required />
      <input type="text" placeholder="Preferred Language" value={language} onChange={(e) => setLanguage(e.target.value)} required />
      <input type="number" placeholder="Friends Bringing" value={friends} onChange={(e) => setFriends(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
