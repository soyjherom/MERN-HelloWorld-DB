set -e
mongo <<EOF
use helloworldDB
db.createCollection('HelloWorldCollection')
db.HelloWorldCollection.insert({hello:'Hello World!'})

EOF