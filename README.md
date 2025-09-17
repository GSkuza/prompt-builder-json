# Prompt Builder JSON 🚀

Interaktywna aplikacja do budowania ustrukturyzowanych promptów w formacie JSON. Idealna do zarządzania złożonymi promptami dla modeli językowych, systemów AI oraz aplikacji wykorzystujących prompt engineering.

## 🌐 Demo

**[▶️ Uruchom aplikację online](https://GSkuza.github.io/prompt-builder-json/)**

Aplikacja jest hostowana bezpośrednio z GitHub Pages - nie wymaga instalacji!

## ✨ Funkcjonalności

- **📝 Intuicyjny formularz** - wszystkie pola promptu w jednym miejscu
- **👁️ Podgląd na żywo** - JSON generuje się automatycznie podczas wypełniania
- **📋 Kopiuj do schowka** - jeden klik aby skopiować JSON
- **💾 Pobierz jako plik** - zapisz prompt lokalnie jako .json
- **🔄 Reset formularza** - wyczyść wszystkie pola jednym przyciskiem
- **📱 Responsywny design** - działa na wszystkich urządzeniach

## 🏗️ Struktura JSON

Aplikacja generuje JSON w następującym formacie:

```json
{
  "id": "prompt_001",
  "role": "user",
  "instruction": "główna instrukcja promptu",
  "context": "kontekst i dodatkowe informacje",
  "expected_output": {
    "format": "paragraph | list | table | json",
    "style": "prostym językiem | specjalistycznie | akademicko",
    "length": "krótko | średnio | obszernie",
    "include_sources": true/false
  },
  "constraints": {
    "avoid": ["lista elementów do unikania"],
    "must_include": ["lista wymaganych elementów"]
  },
  "metadata": {
    "language": "pl",
    "domain": "dziedzina wiedzy",
    "version": "1.0",
    "epistemic": {
      "reasoning_mode": "deterministic | probabilistic | GTMØ"
    }
  },
  "audit": {
    "fact_check_required": true/false,
    "hallucination_guard": true/false,
    "compliance_check": "wymagania zgodności"
  }
}
```

## 🚀 Jak używać

### Online (GitHub Pages)

1. Otwórz [aplikację online](https://[twoja-nazwa-uzytkownika].github.io/prompt-builder-json/)
2. Wypełnij formularz według potrzeb
3. Obserwuj generowany JSON w panelu po prawej
4. Skopiuj lub pobierz gotowy prompt

### Lokalnie

#### Metoda 1: Bezpośrednio w przeglądarce
```bash
git clone https://github.com/[twoja-nazwa-uzytkownika]/prompt-builder-json.git
cd prompt-builder-json
# Otwórz index.html w przeglądarce
```

#### Metoda 2: Z lokalnym serwerem
```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve

# Następnie otwórz http://localhost:8000
```

### W projekcie React

```jsx
import PromptBuilder from './src/PromptBuilder';

function App() {
  return (
    <div>
      <PromptBuilder />
    </div>
  );
}
```

## 📂 Struktura projektu

```
prompt-builder-json/
├── index.html          # Główna aplikacja (GitHub Pages)
├── src/
│   └── PromptBuilder.jsx  # Komponent React
├── README.md           # Dokumentacja
├── LICENSE            # Licencja MIT
└── .gitignore         # Pliki ignorowane przez Git
```

## 🎯 Przypadki użycia

- **Prompt Engineering** - tworzenie złożonych promptów dla LLM
- **Systemy AI** - standaryzacja promptów w organizacji
- **Dokumentacja** - generowanie spójnych instrukcji
- **Badania** - strukturalne podejście do eksperymentów z AI
- **Edukacja** - nauka budowania efektywnych promptów

## 🛠️ Technologie

- **React 18** - framework UI
- **Tailwind CSS** - stylowanie
- **Lucide Icons** - ikony
- **Vanilla JavaScript** - wersja standalone

## 📦 Instalacja dla developerów

### Wymagania
- Node.js 16+ (opcjonalnie, tylko dla wersji React)
- Nowoczesna przeglądarka (Chrome, Firefox, Safari, Edge)

### Kroki instalacji

1. **Sklonuj repozytorium**
```bash
git clone https://github.com/[twoja-nazwa-uzytkownika]/prompt-builder-json.git
cd prompt-builder-json
```

2. **Dla wersji HTML**
- Po prostu otwórz `index.html` w przeglądarce

3. **Dla integracji z React**
```bash
# Skopiuj komponent do swojego projektu
cp src/PromptBuilder.jsx /path/to/your/project/

# Zainstaluj wymagane zależności w swoim projekcie
npm install lucide-react
```

## 🤝 Współpraca

Zachęcam do współpracy! Oto jak możesz pomóc:

1. **Fork** repozytorium
2. Stwórz **branch** dla swojej funkcjonalności (`git checkout -b feature/AmazingFeature`)
3. **Commit** zmiany (`git commit -m 'Add some AmazingFeature'`)
4. **Push** do brancha (`git push origin feature/AmazingFeature`)
5. Otwórz **Pull Request**

### Pomysły na rozwój

- [ ] Eksport/import ustawień
- [ ] Szablony promptów
- [ ] Walidacja JSON
- [ ] Historia promptów
- [ ] Integracja z API
- [ ] Tryb ciemny
- [ ] Wielojęzyczność

## 📝 Licencja

Ten projekt jest dostępny na licencji MIT - zobacz plik [LICENSE](LICENSE) dla szczegółów.

## 👤 Autor

**[Twoje Imię]**

- GitHub: [@twoja-nazwa-uzytkownika](https://github.com/twoja-nazwa-uzytkownika)
- LinkedIn: [Twój profil](https://linkedin.com/in/twoj-profil)

## 🙏 Podziękowania

- Inspiracja: Społeczność prompt engineerów
- Ikony: [Lucide Icons](https://lucide.dev)
- Framework CSS: [Tailwind CSS](https://tailwindcss.com)

## 📊 Status projektu

![GitHub stars](https://img.shields.io/github/stars/[twoja-nazwa-uzytkownika]/prompt-builder-json?style=social)
![GitHub forks](https://img.shields.io/github/forks/[twoja-nazwa-uzytkownika]/prompt-builder-json?style=social)
![GitHub issues](https://img.shields.io/github/issues/[twoja-nazwa-uzytkownika]/prompt-builder-json)
![GitHub license](https://img.shields.io/github/license/[twoja-nazwa-uzytkownika]/prompt-builder-json)

---

⭐ **Jeśli projekt Ci się podoba, zostaw gwiazdkę na GitHub!** ⭐
