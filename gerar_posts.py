import os
import json
import re

PUBLICACAES_DIR = 'gestao-e-futuro/publicacoes'
OUTPUT_JSON = 'gestao-e-futuro/posts.json'

def extrair_tag(html_content, tag_name):
    # Busca a meta tag name="..." content="..."
    match = re.search(fr'<meta\s+name=["\']{tag_name}["\']\s+content=["\'](.*?)["\']', html_content, re.IGNORECASE)
    return match.group(1).strip() if match else ''

def extrair_titulo(html_content):
    match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    return match.group(1).strip() if match else 'Sem título'

def processar_artigos():
    artigos = []

    if not os.path.exists(PUBLICACAES_DIR):
        print("Diretório de publicações não encontrado.")
        return

    for item in os.listdir(PUBLICACAES_DIR):
        caminho_item = os.path.join(PUBLICACAES_DIR, item)
        
        # Aceita arquivos .html ou pastas com index.html
        if os.path.isfile(caminho_item) and item.endswith('.html'):
            slug = item.replace('.html', '')
            url = f"/gestao-e-futuro/publicacoes/{slug}"
            arquivo_html = caminho_item
        elif os.path.isdir(caminho_item) and os.path.exists(os.path.join(caminho_item, 'index.html')):
            slug = item
            url = f"/gestao-e-futuro/publicacoes/{slug}/"
            arquivo_html = os.path.join(caminho_item, 'index.html')
        else:
            continue

        with open(arquivo_html, 'r', encoding='utf-8') as f:
            conteudo = f.read()

        titulo = extrair_titulo(conteudo)
        resumo = extrair_tag(conteudo, 'description')
        keywords_raw = extrair_tag(conteudo, 'keywords')
        
        tags = [t.strip() for t in keywords_raw.split(',') if t.strip()] if keywords_raw else []

        artigos.append({
            "slug": slug,
            "titulo": titulo,
            "url": url,
            "resumo": resumo,
            "tags": tags
        })

    with open(OUTPUT_JSON, 'w', encoding='utf-8') as f:
        json.dump(artigos, f, ensure_ascii=False, indent=2)

    print(f"Éxito: {len(artigos)} artigo(s) indexado(s) em {OUTPUT_JSON}.")

if __name__ == '__main__':
    processar_artigos()
