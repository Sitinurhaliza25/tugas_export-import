const panggilteman = {
    nama: ["Riri", "Raja", "Lira"],
    nim: [123, 234, 345],
  };
  
  function prosesTeman() {
    for (let i = 0; i < panggilteman.nama.length; i++) {
      console.log(`nama:${panggilteman.nama[i]}`);
      console.log(`nim:${panggilteman.nim[i]}`);
    }
  }
  
  export { prosesTeman };
  