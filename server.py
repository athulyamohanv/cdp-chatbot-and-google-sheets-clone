from flask import Flask, request, jsonify
from langchain.document_loaders import WebLoader
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI

app = Flask(__name__)

# Load CDP documentation
docs = {
    "segment": "https://segment.com/docs/?ref=nav",
    "mparticle": "https://docs.mparticle.com/",
    "lytics": "https://docs.lytics.com/",
    "zeotap": "https://docs.zeotap.com/home/en-us/"
}

# Initialize LangChain with OpenAI
llm = OpenAI(api_key="YOUR_OPENAI_API_KEY")  # Replace with your key
chain = load_qa_chain(llm)

# Endpoint to handle chatbot queries
@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    question = data['question']
    doc_type = data.get('doc_type', 'all')

    try:
        if doc_type in docs:
            loader = WebLoader(docs[doc_type])
            relevant_docs = loader.load()
            answer = chain.run(input_documents=relevant_docs, question=question)
        else:
            answer = "Unsupported CDP type. Please specify Segment, mParticle, Lytics, or Zeotap."
        return jsonify({"answer": answer})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
