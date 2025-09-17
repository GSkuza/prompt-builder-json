#!/bin/bash

# Skrypt do szybkiej inicjalizacji repozytorium GitHub
# Użycie: ./init-repo.sh [twoja-nazwa-uzytkownika]

if [ -z "$1" ]; then
    echo "❌ Błąd: Podaj nazwę użytkownika GitHub"
    echo "Użycie: ./init-repo.sh [twoja-nazwa-uzytkownika]"
    exit 1
fi

USERNAME=$1
REPO_NAME="prompt-builder-json"

echo "🚀 Inicjalizacja repozytorium dla użytkownika: $USERNAME"

# Zamień placeholder w plikach
echo "📝 Aktualizacja plików..."
sed -i "s/\[twoja-nazwa-uzytkownika\]/$USERNAME/g" README.md
sed -i "s/\[twoja-nazwa-uzytkownika\]/$USERNAME/g" package.json
sed -i "s/\[twoja-nazwa-uzytkownika\]/$USERNAME/g" GITHUB_PAGES_SETUP.md

# Inicjalizacja git
echo "🔧 Inicjalizacja Git..."
git init

# Dodaj pliki
echo "📦 Dodawanie plików..."
git add .

# Commit
echo "💾 Tworzenie pierwszego commita..."
git commit -m "Initial commit - Prompt Builder JSON"

# Dodaj remote
echo "🔗 Dodawanie zdalnego repozytorium..."
git remote add origin "https://github.com/$USERNAME/$REPO_NAME.git"

echo "✅ Gotowe! Teraz wykonaj:"
echo ""
echo "1. Stwórz repozytorium '$REPO_NAME' na GitHub.com"
echo "2. Wykonaj: git push -u origin main"
echo "3. Włącz GitHub Pages w Settings → Pages"
echo ""
echo "📖 Szczegółowe instrukcje znajdziesz w pliku GITHUB_PAGES_SETUP.md"