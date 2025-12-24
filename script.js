function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    
    // Hilang otomatis setelah 3 detik
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}