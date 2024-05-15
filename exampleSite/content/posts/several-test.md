---
title: "Several Tests"
description: "测试"
date: 2024-05-08T12:38:23Z
math: true
hidden: false
draft: false
categories:
tags:
---

# Math Latex

$$
\emptyset \ \omega \ \emptyset
$$

# Unicode

[From](https://kermitproject.org/utf8.html#notes)

**English**: The quick brown fox jumps over the lazy dog.

**Jamaican**: Chruu, a kwik di kwik brong fox a jomp huova di liezi daag de, yu no siit?

**Irish**: "An ḃfuil do ċroí ag bualaḋ ó ḟaitíos an ġrá a ṁeall lena ṗóg éada ó ṡlí do leasa ṫú?" "D'ḟuascail Íosa Úrṁac na hÓiġe Beannaiṫe pór Éava agus Áḋaiṁ."

**Dutch**: Pa's wĳze lynx bezag vroom het fikse aquaduct.

**German**: Falsches Üben von Xylophonmusik quält jeden größeren Zwerg. (1)

**German**: Im finſteren Jagdſchloß am offenen Felsquellwaſſer patzte der affig-flatterhafte kauzig-höf‌liche Bäcker über ſeinem verſifften kniffligen C-Xylophon. (2)

**Norwegian**: Blåbærsyltetøy ("blueberry jam", includes every extra letter used in Norwegian).

**Swedish**: Flygande bäckasiner söka strax hwila på mjuka tuvor.

**Icelandic**: Sævör grét áðan því úlpan var ónýt.

**Finnish**: (5) Törkylempijävongahdus (This is a perfect pangram, every letter appears only once. Translating it is an art on its own, but I'll say "rude lover's yelp". :-D)

**Finnish**: (5) Albert osti fagotin ja töräytti puhkuvan melodian. (Albert bought a bassoon and hooted an impressive melody.)

**Finnish**: (5) On sangen hauskaa, että polkupyörä on maanteiden jokapäiväinen ilmiö. (It's pleasantly amusing, that the bicycle is an everyday sight on the roads.)

**Polish**: Pchnąć w tę łódź jeża lub osiem skrzyń fig.

**Czech**: Příliš žluťoučký kůň úpěl ďábelské ódy.

**Slovak**: Starý kôň na hŕbe kníh žuje tíško povädnuté ruže, na stĺpe sa ďateľ učí kvákať novú ódu o živote.

**Slovenian**: Šerif bo za domačo vajo spet kuhal žgance.

**Greek** (monotonic): ξεσκεπάζω την ψυχοφθόρα βδελυγμία

**Greek** (polytonic): ξεσκεπάζω τὴν ψυχοφθόρα βδελυγμία

**Russian**: Съешь же ещё этих мягких французских булок да выпей чаю.

**Russian**: В чащах юга жил-был цитрус? Да, но фальшивый экземпляр! ёъ.

**Bulgarian**: Жълтата дюля беше щастлива, че пухът, който цъфна, замръзна като гьон.

**Sami** (Northern): Vuol Ruoŧa geđggiid leat máŋga luosa ja čuovžža.

**Hungarian**: Árvíztűrő tükörfúrógép.

**Spanish**: El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío, añoraba a su querido cachorro.

**Spanish**: Volé cigüeña que jamás cruzó París, exhibe flor de kiwi y atún.

**Portuguese**: O próximo vôo à noite sobre o Atlântico, põe freqüentemente o único médico. (3)

**French**: Les naïfs ægithales hâtifs pondant à Noël où il gèle sont sûrs d'être déçus en voyant leurs drôles d'œufs abîmés.

**Esperanto**: Eĥoŝanĝo ĉiuĵaŭde

**Esperanto**: Laŭ Ludoviko Zamenhof bongustas freŝa ĉeĥa manĝaĵo kun spicoj.

**Hebrew**: זה כיף סתם לשמוע איך תנצח קרפד עץ טוב בגן.

**Japanese** (Hiragana):

    **いろはにほへど**　ちりぬるを
    わがよたれぞ　つねならむ
    うゐのおくやま　けふこえて
    あさきゆめみじ　ゑひもせず (4) 


# Syntax Highlight

```python
def fast_inverse_sqrt(number):
    threehalfs = 1.5
    x2 = number * 0.5
    y = number
    i = y.view('i')
    i = 0x5f3759df - (i >> 1)
    y = i.view('float')
    y = y * (threehalfs - (x2 * y * y))
    return y
```

```cpp
#include <iostream>
#include <cmath>

float fast_inverse_sqrt(float number) {
    float x2 = number * 0.5f;
    float y = number;
    int32_t i = *(int32_t*)&y;
    i = 0x5f3759df - (i >> 1);
    y = *(float*)&i;
    y = y * (1.5f - (x2 * y * y));
    return y;
}
```

