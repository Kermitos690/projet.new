import { useEffect } from "react"
import { supabase } from "./supabase"

function App() {
  useEffect(() => {
    const testConnection = async () => {
      const { data, error } = await supabase.from("profiles").select("*")
      console.log("✅ Connexion OK !", data)
      if (error) console.error("❌ Erreur Supabase :", error)
    }

    testConnection()
  }, [])

  return <h1>Test Supabase en cours...</h1>
}

export default App
