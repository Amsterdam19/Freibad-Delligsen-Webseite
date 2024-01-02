import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const blog = await getCollection('neues');
	return rss({
	  title: SITE_TITLE,
	  description: SITE_DESCRIPTION,
	  site: context.site,
	  items: blog.map((post) => ({
		title: post.data.title,
		pubDate: post.data.pubDate,
		description: post.data.description,
		link: `/neues/${post.slug}/`,
		content: `${['<img src="' + SITE_URL + post.data.src.src + '" alt="" />' + sanitizeHtml(parser.render(post.body))]}`,
	  })),
	});
  }