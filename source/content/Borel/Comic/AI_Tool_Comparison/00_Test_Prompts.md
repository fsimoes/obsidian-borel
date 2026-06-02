---
title: Prompts de teste (LOCKED)
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/bakeoff
  - comic/prompts
locked: true
---

# Prompts de teste — NÃO ALTERAR durante o bake-off

**Versão:** 2026-06-01d · **T2b Nightwolf** antes do T5 · blocos ChatGPT prontos.

| Ferramenta | Como usar |
|------------|-----------|
| **ChatGPT** | Copiar cada bloco **「ChatGPT — copiar tudo」** (prompt + Avoid numa mensagem só) |
| **Midjourney / SD / Leonardo** | Usar **Prompt** e **Negative** separados abaixo |

### Nomes canônicos

| Nome no prompt | Personagem |
|----------------|------------|
| **Tony Tigger** (Tony) | [[../../Players/Tony\|Tony]] — fighter/paladin |
| **Nightwolf** | [[../../Players/Nightwolf\|Nightwolf]] — dark elf ranger |

---

## ChatGPT — índice rápido

1. [[#T1 — Estilo / ambiente#ChatGPT — copiar tudo|T1 taverna]]
2. [[#T2 — Retrato Tony#ChatGPT — copiar tudo|T2 Tony]] → ref Tony
3. [[#T3 — Consistência (sem fala)#ChatGPT — copiar tudo|T3]] → anexar **T2**
4. [[#T4 — Um balão (português)#ChatGPT — copiar tudo|T4]]
5. [[#T2b — Retrato Nightwolf (antes do T5)#ChatGPT — copiar tudo|T2b Nightwolf]] → ref Nightwolf
6. [[#T5 — Dois balões (português)#ChatGPT — copiar tudo|T5]] → anexar **T2 + T2b**

**Dica:** uma conversa só. **T5 com dois personagens:** sem retrato do Nightwolf, a IA inventa um elfo aleatório — gere **T2b** antes do T5.

---

## T1 — Estilo / ambiente

**Arquivo:** `T1-taverna.png` · Sem personagem, sem texto.

### ChatGPT — copiar tudo

```
Generate an image. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette. Interior of a busy medieval tavern at night, warm candlelight, no characters in frame, no text, wide establishing shot, comic book background art.

Avoid: photorealistic, anime, 3d render, watermark, text, logo, blurry, people, characters.
```

### Prompt (ferramentas com campo separado)

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette. Interior of a busy medieval tavern at night, warm candlelight, no characters in frame, no text, wide establishing shot, comic book background art.
```

### Negative

```
photorealistic, anime, 3d render, watermark, text, logo, blurry, people, characters
```

---

## T2 — Retrato Tony

**Arquivo:** `T2-tony-retrato.png` · Sem balão · **Esta imagem = ref para T3 e T5.**

### ChatGPT — copiar tudo

```
Generate an image. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Character portrait of Tony Tigger, charismatic human fighter-paladin, waist-up, neutral gray background, facing camera, greatsword on back, practical armor, confident protective expression, always call this character Tony Tigger or Tony. Clear silhouette, comic book character design.

Avoid: photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy.
```

### Prompt

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Character portrait of Tony Tigger, charismatic human fighter-paladin, waist-up, neutral gray background, facing camera, greatsword on back, practical armor, confident protective expression, always call this character Tony Tigger or Tony. Clear silhouette, comic book character design.
```

### Negative

```
photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy
```

---

## T3 — Consistência (sem fala)

**Arquivo:** `T3-tony-consistencia.png`  
**ChatGPT:** anexar `T2-tony-retrato.png` na mesma mensagem abaixo.

### ChatGPT — copiar tudo

```
Generate an image. Use the attached reference image for Tony Tigger's face, hair, and armor. Same character Tony Tigger as in the reference — human fighter-paladin with greatsword. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Medium shot in a dark stone cavern, Tony raising sword defensively, dramatic rim light, comic panel composition, no text, no speech bubbles.

Avoid: photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy, different character, wrong face, different armor.
```

### Prompt

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Tony Tigger, same character Tony as in the reference image — human fighter-paladin with greatsword, same face and armor as reference. Medium shot in a dark stone cavern, Tony raising sword defensively, dramatic rim light, comic panel composition, no text, no speech bubbles.
```

### Negative

```
photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy, different character, wrong face, different armor
```

---

## T4 — Um balão (português)

**Arquivo:** `T4-balao-unico-pt.png`  
**Balão exato:** `Recua! Eu cubro a retaguarda.`

### ChatGPT — copiar tudo

```
Generate an image. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Comic book panel. Tony Tigger, human fighter-paladin, in tavern, pointing forward urgently. One clear speech bubble with tail pointing to Tony's mouth. The speech bubble must contain exactly this Portuguese text, spelled correctly: "Recua! Eu cubro a retaguarda." Hand-lettered comic font style inside the bubble. No other text in the image.

Avoid: photorealistic, anime, 3d render, watermark, logo, blurry, English text, Spanish text, gibberish letters, illegible font, misspelled Portuguese, extra fingers, extra arms, deformed hands, bad anatomy, multiple speech bubbles, text outside bubble, caption bar.
```

### Prompt

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Comic book panel. Tony Tigger, human fighter-paladin, in tavern, pointing forward urgently. One clear speech bubble with tail pointing to Tony's mouth. The speech bubble must contain exactly this Portuguese text, spelled correctly: "Recua! Eu cubro a retaguarda." Hand-lettered comic font style inside the bubble. No other text in the image.
```

### Negative

```
photorealistic, anime, 3d render, watermark, logo, blurry, English text, Spanish text, gibberish letters, illegible font, misspelled Portuguese, extra fingers, extra arms, deformed hands, bad anatomy, multiple speech bubbles, text outside bubble, caption bar
```

---

## T2b — Retrato Nightwolf (antes do T5)

**Arquivo:** `T2b-nightwolf-retrato.png`  
**Obrigatório antes do T5** — mesmo papel que T2 para Tony. Sem balão.

Base: [[../../Players/Prompts_para_Imagens_Players#Nightwolf - Ranger/Lobisomem|ficha Nightwolf]] (forma humanoide / ranger, não lobisomem completo).

### ChatGPT — copiar tudo

```
Generate an image. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Character portrait of Nightwolf, mysterious dark elf ranger, red eyes, longbow on back, smoking dagger at belt, studded leather armor, magical boots, alert predatory expression, waist-up, neutral gray background, facing camera, always call this character Nightwolf. Clear silhouette, comic book character design. Not a werewolf transform, not full wolf — ranger form only.

Avoid: photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy, werewolf monster, full wolf head.
```

### Prompt

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Character portrait of Nightwolf, dark elf ranger, red eyes, longbow on back, studded leather armor, waist-up, neutral gray background, facing camera, always call this character Nightwolf. Comic book character design. Ranger form only, not werewolf.
```

### Negative

```
photorealistic, anime, 3d render, watermark, logo, blurry, text, speech bubble, caption, extra fingers, extra arms, blurry face, deformed hands, bad anatomy, werewolf, wolf head, furry
```

---

## T5 — Dois balões (português)

**Arquivo:** `T5-dialogo-dois-pt.png`  
**ChatGPT:** anexar **`T2-tony-retrato.png`** e **`T2b-nightwolf-retrato.png`** na mesma mensagem.

| Personagem | Fala no balão | Ref |
|------------|----------------|-----|
| Tony Tigger | Fica atrás de mim. | T2 |
| Nightwolf | Sempre. | T2b |

### ChatGPT — copiar tudo

```
Generate an image. I attached two reference images: first is Tony Tigger (human fighter-paladin), second is Nightwolf (dark elf ranger). Use them for faces, armor, and silhouettes. European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Comic book panel, dungeon corridor, Tony Tigger and Nightwolf side by side, same designs as reference images. Tony with greatsword, Nightwolf with longbow, red eyes, studded leather. Two speech bubbles with clear tails: (1) Tony Tigger's bubble, text exactly: "Fica atrás de mim." (2) Nightwolf's bubble, text exactly: "Sempre." Hand-lettered comic font, Portuguese only, no other text in the image.

Avoid: photorealistic, anime, 3d render, watermark, logo, blurry, English text, Spanish text, gibberish letters, illegible font, misspelled Portuguese, wrong letters, extra fingers, extra arms, deformed hands, bad anatomy, merged speech bubbles, overlapping bubbles, three or more characters, text outside bubble, caption bar, different character, wrong face, wrong elf, generic unnamed ranger.
```

### Prompt

```
European fantasy graphic novel style, inked outlines, cel shading, muted earth and bronze palette, medieval fantasy, comic book art, clear silhouettes. Comic book panel, dungeon corridor, Tony Tigger and Nightwolf side by side, same face and outfits as reference images. Tony Tigger human fighter-paladin with greatsword, Nightwolf dark elf ranger with longbow, red eyes, studded leather armor. Two speech bubbles: (1) Tony — "Fica atrás de mim." (2) Nightwolf — "Sempre." Portuguese only, hand-lettered comic font. Use reference images for both characters.
```

### Negative

```
photorealistic, anime, 3d render, watermark, logo, blurry, English text, Spanish text, gibberish letters, illegible font, misspelled Portuguese, wrong letters, extra fingers, extra arms, deformed hands, bad anatomy, merged speech bubbles, overlapping bubbles, three or more characters, text outside bubble, caption bar, different character, wrong face
```
