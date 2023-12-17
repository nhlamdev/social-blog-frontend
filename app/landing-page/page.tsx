import axios from "axios";

export default async function OwnerProfilePage() {
  const { data } = await axios.get(
    "http://localhost:3000/json/landing-page.json"
  );

  return <div></div>;
}
