# name: tai-locale
# about: A plugin for Taiwanese language locale
# version: 1.02

register_locale(
  "tai_Han",
  name: "Taiwanese (Hanji)",
  nativeName: "台語（漢字）",
  plural: {
    keys: [:other],
    rule: lambda { |n| :other }
  }
)

register_locale(
  "tai_Rom",
  name: "Taiwanese (Roman)",
  nativeName: "Tâi-gí (Lô-má-jī)",
  plural: {
    keys: [:other],
    rule: lambda { |n| :other }
  }
)