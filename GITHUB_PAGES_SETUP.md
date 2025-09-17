# 🚀 Instrukcja publikacji na GitHub Pages

## Kroki do opublikowania aplikacji:

### 1. Stwórz nowe repozytorium na GitHub

1. Zaloguj się na [GitHub.com](https://github.com)
2. Kliknij przycisk **"New"** lub **"+"** → **"New repository"**
3. Nazwij repozytorium: `prompt-builder-json`
4. Ustaw jako **Public**
5. NIE inicjalizuj z README, .gitignore ani licencją (mamy już te pliki)
6. Kliknij **"Create repository"**

### 2. Wyślij kod do repozytorium

W terminalu, w folderze z projektem:

```bash
# Zainicjalizuj git
git init

# Dodaj wszystkie pliki
git add .

# Zatwierdź zmiany
git commit -m "Initial commit - Prompt Builder JSON"

# Dodaj zdalne repozytorium (zamień [twoja-nazwa-uzytkownika])
git remote add origin https://github.com/[twoja-nazwa-uzytkownika]/prompt-builder-json.git

# Wyślij kod
git push -u origin main
```

### 3. Włącz GitHub Pages

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij zakładkę **"Settings"** (Ustawienia)
3. Przewiń do sekcji **"Pages"** w menu po lewej
4. W sekcji **"Source"** wybierz:
   - **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Kliknij **"Save"**

### 4. Poczekaj na deploy

- GitHub potrzebuje 2-10 minut na pierwszą publikację
- Status możesz sprawdzić w zakładce **"Actions"**
- Po zakończeniu, twoja aplikacja będzie dostępna pod adresem:
  ```
  https://[twoja-nazwa-uzytkownika].github.io/prompt-builder-json/
  ```

### 5. Zaktualizuj README

W pliku `README.md` zamień wszystkie wystąpienia `[twoja-nazwa-uzytkownika]` na swoją prawdziwą nazwę użytkownika GitHub.

## 🔄 Aktualizacje

Po wprowadzeniu zmian w kodzie:

```bash
git add .
git commit -m "Opis zmian"
git push
```

GitHub Pages automatycznie zaktualizuje stronę (może to potrwać 1-2 minuty).

## ⚠️ Rozwiązywanie problemów

### Strona nie działa?

1. **Sprawdź status** w Settings → Pages
2. **Sprawdź Actions** - czy build się powiódł
3. **Wyczyść cache** przeglądarki (Ctrl+F5)
4. **Sprawdź nazwę** - czy plik to `index.html` (nie `prompt-builder.html`)

### Error 404?

- Upewnij się, że plik `index.html` jest w głównym folderze
- Sprawdź czy branch to `main` (nie `master`)
- Poczekaj 10 minut od włączenia Pages

## 🎉 Gratulacje!

Twoja aplikacja jest teraz dostępna online dla każdego!