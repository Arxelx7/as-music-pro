# AS Music Pro

Primeiro protótipo da aplicação de música, com identidade visual preta e roxa.

## Estado atual
- Interface responsiva para telemóvel e computador.
- Biblioteca de ficheiros de áudio locais.
- Pesquisa na biblioteca.
- Player com reproduzir/pausar, anterior/seguinte e barra de progresso.

## Como testar
Abra `index.html` num navegador moderno e selecione **Adicionar músicas** para carregar ficheiros de áudio do seu dispositivo.

## Próximas etapas
1. Criar catálogo online com áudio autorizado pelos artistas ou com licenças compatíveis.
2. Desenvolver backend e autenticação.
3. Guardar playlists e favoritos por utilizador.
4. Implementar downloads offline respeitando as licenças.
5. Preparar uma aplicação Android.

> Nota: esta versão ainda não transmite músicas pela Internet. Os ficheiros selecionados são reproduzidos localmente no navegador. O projeto não inclui músicas comerciais sem autorização.


## Contas de utilizador (em preparação)
A interface já inclui entrada e criação de conta por e-mail e palavra-passe usando Supabase Auth. Para ativar o registo, é necessário criar um projeto Supabase e configurar no `index.html`:
- `SUPABASE_URL`: Project URL.
- `SUPABASE_ANON_KEY`: chave publicável (anon/publishable).

Nunca colocar a chave `service_role` no frontend. Antes de lançar publicamente, configurar confirmação de e-mail, políticas de segurança (RLS) e regras de acesso aos dados.
