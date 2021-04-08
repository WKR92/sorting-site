firefox - nie działa czyszczenie imputów przy odświeżaniu strony poprzez clearBtn w window.onload


1. Zaczałem od wylistowania kanałów. Stworzyłem component reprezentujący dany kanał i na jego postawie listę wszytskich kanałów.
Później zmapowałem te kanały do odpowiedniego diva.

2. Potem zająłem sie filterm textowym. Prosty zapis event.target.value do zmiennej i szukanie go w tutułach kanałów.

3. Uzyłem switch do filtrów z radio buttonów, żeby stworzyć listy kanałów odpowiadających wybranym regułom. Pracowałem na kopii listy wszystkich kanałów, żeby móc przywrócić domyśly display po wyłączeniu filtrów.

4. Clear button i reaverse button. Dodałem coś w rodzaju state z informacją czy uzytkownik chce odwracać sortowanie czy nie. Na podsatwie tego zrobiłem odpowiedni filtr w if statement. Clear button to prosta zmiana txt input na "" i checked radio buttonów na false.

5. Dodałem ikonę JS w lewym górnym rogu.

6. Zrobiłem darkmode/light mode button przy użyciu invert(1).

7. Dodałem zapisywanie ilości wejść na stronę i daty ostatniego i obecnego wejścia do localStorage.

8. Poprawiłem resize doddając media queries.

9. Zauwaźyłem, że text filter nie jest kompatybilny z filtrami z radio buttonów. Dodałem filtered channels, żeby można było sortować również tylko kanały wyszukane przez text input.

10. Podzieliłem kod na moduly i usunąłem niepotrzebne rzeczy.

11. Ostatnia zabawa z dopieszczaniem resizu.

12. Sprawdzałem działenie w Opera, Google Chrome, Firefox, Edge.
