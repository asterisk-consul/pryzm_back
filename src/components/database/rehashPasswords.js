import bcrypt from "bcrypt";
import pool from "./database/keys.js"; // ajustá si tu archivo está en otra ruta

const rehashPasswords = async () => {
  try {
    const { rows: users } = await pool.query(
      "SELECT id, password FROM usuarios"
    );

    for (const user of users) {
      // Hashear solo si aún no fue hasheada (esto depende de tu lógica, opcional)
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await pool.query("UPDATE usuarios SET password = $1 WHERE id = $2", [
        hashedPassword,
        user.id,
      ]);

      console.log(`✅ Usuario ${user.id} actualizado`);
    }

    console.log("🎉 Todas las contraseñas fueron hasheadas correctamente");
    process.exit();
  } catch (error) {
    console.error("❌ Error al hashear contraseñas:", error);
    process.exit(1);
  }
};

rehashPasswords();
