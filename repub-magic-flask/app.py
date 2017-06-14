from flask import Flask, render_template
import json
import os
import requests
import urllib2

app = Flask(__name__)

npr_key = os.environ.get('NPR_KEY')


@app.route('/')
def hello_world():
    return '<h1>Repub Magic</h1><h2>Version 1.0.1, Build 2017.06.14</h2>'

@app.route('/republish/story-api/<npr_id>')
def story_api_republish(npr_id):
    url = 'http://api.npr.org/query?apiKey='

    url = url + str(npr_key)
    url += '&format=json&id='
    url += npr_id

    print url

    response = requests.get(url)
    json_obj = json.loads(response.content)

    story = json_obj['list']['story'][0]

    story_title = story['title']['$text']
    story_canonical_url = story['link'][0]['$text']
    story_author = story['byline'][0]['name']['$text']
    story_image = story['image'][0]['src']
    story_orgid = story['organization'][0]['orgId']
    story_id = story['id']

    story_html = ""

    for graph in story['textWithHtml']['paragraph']:
        story_html += graph['$text']

    story_tracking_code = ""

    if "iframe" in story_html:
        split_string = story_html.split("iframe")
        story_tracking_code += "<iframe"
        story_tracking_code += split_string[-2]
        story_tracking_code += "iframe>"

    

    return render_template('story_api_republish.html',
     story_title=story_title,
     story_author=story_author,
     story_image = story_image,
     story_canonical_url = story_canonical_url,
     story_orgid = story_orgid,
     story_id = story_id,
     story_html = story_html,
     story_tracking_code = story_tracking_code)




if __name__ == '__main__':
    app.run()
