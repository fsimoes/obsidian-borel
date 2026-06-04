# Acesso ao Dungeon no site (Quartz)

Proteção por senha no **site publicado**, no mesmo espírito do leitor de quadrinho (`static/comic/chapters.json`).

## Ativar / alterar senha

Edite [`access.json`](access.json):

```json
{
  "access": {
    "passwordEnabled": true,
    "password": "sua-senha-da-mesa"
  }
}
```

- `passwordEnabled: false` — desliga o portão (útil em build local).
- Modelo: [`access.json.example`](access.json.example).

Após mudar a senha, rode `npm run build:site` de novo.

## O que a senha faz

- Páginas cujo URL contém `/Dungeon/` exibem um overlay até a senha correta (`sessionStorage`).
- A **busca** do site não indexa notas do Dungeon até o desbloqueio na mesma sessão do navegador.

## Limitações (importante)

Isto é **proteção no navegador**, não criptografia no servidor. Quem souber a URL ainda pode baixar o HTML estático ou o `contentIndex.json` com ferramentas — igual ao quadrinho com senha.

Para sigilo forte:

- não publicar a pasta `content/Dungeon`, ou
- usar autenticação no hospedeiro (Cloudflare Access, Basic Auth no nginx, site privado no GitHub Pages com org fechada, etc.).

## Arquivos relacionados

- `quartz/components/DungeonGate.tsx`
- `quartz/components/scripts/dungeon-gate.inline.ts`
