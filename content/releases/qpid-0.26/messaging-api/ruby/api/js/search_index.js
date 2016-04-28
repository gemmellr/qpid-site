var search_data = {"index":{"searchIndex":["qpid","messaging","address","connection","duration","cqpid","message","receiver","sender","session","*()","[]()","[]=()","acknowledge()","address_type()","address_type=()","authenticated_username()","available()","available()","capacity()","capacity()","capacity=()","capacity=()","close()","close()","close()","close()","closed?()","commit()","connection()","content()","content=()","content_size()","content_type()","content_type=()","correlation_id()","correlation_id=()","create_receiver()","create_sender()","create_session()","durable()","durable=()","errors()","errors?()","fetch()","get()","message_id()","message_id=()","milliseconds()","name()","name()","name()","name=()","new()","new()","new()","new()","next_receiver()","open()","open?()","options()","options=()","priority()","priority=()","properties()","receivable()","receiver()","redelivered()","redelivered=()","reject()","release()","reply_to()","reply_to=()","rollback()","send()","sender()","session()","session()","session()","subject()","subject()","subject=()","subject=()","sync()","ttl()","ttl=()","unsettled()","unsettled()","unsettled_acks()","user_id()","user_id=()"],"longSearchIndex":["qpid","qpid::messaging","qpid::messaging::address","qpid::messaging::connection","qpid::messaging::duration","qpid::messaging::duration::cqpid","qpid::messaging::message","qpid::messaging::receiver","qpid::messaging::sender","qpid::messaging::session","qpid::messaging::duration#*()","qpid::messaging::message#[]()","qpid::messaging::message#[]=()","qpid::messaging::session#acknowledge()","qpid::messaging::address#address_type()","qpid::messaging::address#address_type=()","qpid::messaging::connection#authenticated_username()","qpid::messaging::receiver#available()","qpid::messaging::sender#available()","qpid::messaging::receiver#capacity()","qpid::messaging::sender#capacity()","qpid::messaging::receiver#capacity=()","qpid::messaging::sender#capacity=()","qpid::messaging::connection#close()","qpid::messaging::receiver#close()","qpid::messaging::sender#close()","qpid::messaging::session#close()","qpid::messaging::receiver#closed?()","qpid::messaging::session#commit()","qpid::messaging::session#connection()","qpid::messaging::message#content()","qpid::messaging::message#content=()","qpid::messaging::message#content_size()","qpid::messaging::message#content_type()","qpid::messaging::message#content_type=()","qpid::messaging::message#correlation_id()","qpid::messaging::message#correlation_id=()","qpid::messaging::session#create_receiver()","qpid::messaging::session#create_sender()","qpid::messaging::connection#create_session()","qpid::messaging::message#durable()","qpid::messaging::message#durable=()","qpid::messaging::session#errors()","qpid::messaging::session#errors?()","qpid::messaging::receiver#fetch()","qpid::messaging::receiver#get()","qpid::messaging::message#message_id()","qpid::messaging::message#message_id=()","qpid::messaging::duration#milliseconds()","qpid::messaging::address#name()","qpid::messaging::receiver#name()","qpid::messaging::sender#name()","qpid::messaging::address#name=()","qpid::messaging::address::new()","qpid::messaging::connection::new()","qpid::messaging::duration::new()","qpid::messaging::message::new()","qpid::messaging::session#next_receiver()","qpid::messaging::connection#open()","qpid::messaging::connection#open?()","qpid::messaging::address#options()","qpid::messaging::address#options=()","qpid::messaging::message#priority()","qpid::messaging::message#priority=()","qpid::messaging::message#properties()","qpid::messaging::session#receivable()","qpid::messaging::session#receiver()","qpid::messaging::message#redelivered()","qpid::messaging::message#redelivered=()","qpid::messaging::session#reject()","qpid::messaging::session#release()","qpid::messaging::message#reply_to()","qpid::messaging::message#reply_to=()","qpid::messaging::session#rollback()","qpid::messaging::sender#send()","qpid::messaging::session#sender()","qpid::messaging::connection#session()","qpid::messaging::receiver#session()","qpid::messaging::sender#session()","qpid::messaging::address#subject()","qpid::messaging::message#subject()","qpid::messaging::address#subject=()","qpid::messaging::message#subject=()","qpid::messaging::session#sync()","qpid::messaging::message#ttl()","qpid::messaging::message#ttl=()","qpid::messaging::receiver#unsettled()","qpid::messaging::sender#unsettled()","qpid::messaging::session#unsettled_acks()","qpid::messaging::message#user_id()","qpid::messaging::message#user_id=()"],"info":[["Qpid","","Qpid.html","",""],["Qpid::Messaging","","Qpid/Messaging.html","","<p>The Qpid Messaging framework is an enterprise messaging framework based on\nthe open-source AMQP protocol. …\n"],["Qpid::Messaging::Address","","Qpid/Messaging/Address.html","","<p>Address represents an address to which messages can be sent or from which\nthey can be received.\n<p>The Address …\n"],["Qpid::Messaging::Connection","","Qpid/Messaging/Connection.html","","<p>A <code>Connection</code> represents a network connection to a remote\nendpoint.\n"],["Qpid::Messaging::Duration","","Qpid/Messaging/Duration.html","","<p>A Duration represents a period of time in milliseconds\n<p>Named Durations\n<p>The following named <code>Durations</code> are …\n"],["Qpid::Messaging::Duration::Cqpid","","Qpid/Messaging/Duration/Cqpid.html","",""],["Qpid::Messaging::Message","","Qpid/Messaging/Message.html","","<p>A <code>Message</code> represents an routable piece of information.\n"],["Qpid::Messaging::Receiver","","Qpid/Messaging/Receiver.html","","<p><code>Receiver</code> is the entity through which messages are received.\n<p>An instance of <code>Receiver</code> can only be created …\n"],["Qpid::Messaging::Sender","","Qpid/Messaging/Sender.html","","<p><code>Sender</code> is the entity through which messages are sent.\n<p>An instance of <code>Sender</code> can only be created using …\n"],["Qpid::Messaging::Session","","Qpid/Messaging/Session.html","","<p>A <code>Session</code> represents a distinct conversation between end\npoints. They are created from an active (i.e., …\n"],["*","Qpid::Messaging::Duration","Qpid/Messaging/Duration.html#method-i-2A","(factor)","<p>Multiplies the duration of the <code>Duration</code> and returns a new\ninstance.\n<p>Raises exceptions on a negative factor. …\n"],["[]","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-5B-5D","(key)","<p>Returns the value for the named property.\n<p>Options\n<p><code>name</code> - the property name\n"],["[]=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-5B-5D-3D","(key, value)","<p>Assigns a value to the named property.\n<p>A property&#39;s name or value, if a symbol, will be converted …\n"],["acknowledge","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-acknowledge","(options = {})","<p>Acknowledges one or more outstanding messages that have been received on\nthis session.\n<p>Arguments\n<p><code>options</code> …\n"],["address_type","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-address_type","()","<p>Returns the type for the <code>Address</code>.\n"],["address_type=","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-address_type-3D","(type)","<p>Sets the type for the <code>Address</code>.\n<p>The type of the address determines how <code>Sender</code> and\n<code>Receiver</code> objects are …\n"],["authenticated_username","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-authenticated_username","()","<p>Returns the username used to authenticate with the connection.\n<p>If the connection did not user authentication …\n"],["available","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-available","()","<p>Returns the number of messages locally held.\n<p>The available is always 0 &lt;= available &lt;= capacity. …\n"],["available","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-available","()","<p>Returns the available slots for sending messages.\n<p>This differs from <code>capacity</code> in that it is the available …\n"],["capacity","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-capacity","()","<p>Returns the capacity.\n"],["capacity","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-capacity","()","<p>Returns the capacity.\n"],["capacity=","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-capacity-3D","(capacity)","<p>Sets the capacity.\n<p>The capacity of a <code>Receiver</code> is the number of Messages that can\nbe pre-fetched from the …\n"],["capacity=","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-capacity-3D","(capacity)","<p>Sets the capacity for this <code>Sender</code>.\n<p>The capacity is the number of outgoing messages that can be held pending …\n"],["close","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-close","()","<p>Closes the connection.\n<p>Examples\n\n<pre># close a connection\nconn.close</pre>\n"],["close","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-close","()","<p>Closes this <code>Receiver</code>.\n<p>This does not affect the owning Session or Connection.\n"],["close","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-close","()","<p>Closes this <code>Sender</code>.\n<p>This does not affect the owning Session or Connection.\n"],["close","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-close","()","<p>Closes the <code>Session</code> and all associated <code>Sender</code> and\n<code>Receiver</code> instances.\n<p><strong>NOTE:</strong> All <code>Session</code> instances for a …\n"],["closed?","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-closed-3F","()","<p>Returns whether the <code>Receiver</code> is closed.\n"],["commit","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-commit","()","<p>Commits any pending transactions for a transactional session.\n"],["connection","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-connection","()","<p>Returns the Connection associated with this session.\n"],["content","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-content","()","<p>Returns the content of the <code>Message</code>.\n<p>Content is automatically decoded based on the specified content type. …\n"],["content=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-content-3D","(content)","<p>Sets the content for the <code>Message</code>.\n<p>Content is automatically encoded for Array and Hash types. Other types …\n"],["content_size","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-content_size","()","<p>Returns the content&#39;s size in bytes.\n"],["content_type","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-content_type","()","<p>Returns the content type for the <code>Message</code>.\n"],["content_type=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-content_type-3D","(content_type)","<p>Sets the content type for the <code>Message</code>.\n<p>This should be set by the sending application and indicates to …\n"],["correlation_id","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-correlation_id","()","<p>Returns the correlation id of the <code>Message</code>.\n"],["correlation_id=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-correlation_id-3D","(correlation_id)","<p>Sets the correlation id of the <code>Message</code>.\n<p>The correlation id can be used as part of a protocol for message …\n"],["create_receiver","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-create_receiver","(address)","<p>Creates a new endpoint for receiving messages.\n<p>The <code>address</code> can either be an instance Address or else an …\n"],["create_sender","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-create_sender","(address)","<p>Creates a new endpoint for sending messages.\n<p>The address can either be an instance Address or else an …\n"],["create_session","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-create_session","(args = {})","<p>Creates a new session.\n<p>Arguments\n<p><code>:name</code> - specifies the name for this session\n"],["durable","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-durable","()","<p>Returns the durability for the <code>Message</code>.\n"],["durable=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-durable-3D","(durable)","<p>Sets the durability of the <code>Message</code>.\n<p>This is a hint to the messaging infrastructure that the message should …\n"],["errors","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-errors","()","<p>If the <code>Session</code> has been rendered invalid due to some\nexception, this method will result in that exception …\n"],["errors?","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-errors-3F","()","<p>Returns true if there were exceptions on this session.\n"],["fetch","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-fetch","(duration = Qpid::Messaging::Duration::FOREVER)","<p>Retrieves a message from the receiver&#39;s subscription, or waits for up\nto the duration specified for …\n"],["get","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-get","(duration = Qpid::Messaging::Duration::FOREVER)","<p>Retrieves a message from the local queue, or waits for up to the duration\nspecified for one to become …\n"],["message_id","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-message_id","()","<p>Returns the message id.\n"],["message_id=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-message_id-3D","(message_id)","<p>Sets the message id.\n<p><strong>NOTE:</strong> this field must be a UUID type currently. A non-UUID\nvalue will be converted …\n"],["milliseconds","Qpid::Messaging::Duration","Qpid/Messaging/Duration.html#method-i-milliseconds","()","<p>Returns the period of time in <code>milliseconds</code>.\n<p>Examples\n\n<pre># doubling growth in waiting for messages in a loop ...</pre>\n"],["name","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-name","()","<p>Returns the name for the <code>Address</code>.\n<p>Examples\n\n<pre># display the name of the address\naddr = Qpid::Messaging::Address.new ...</pre>\n"],["name","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-name","()","<p>Returns the name of this <code>Receiver</code>.\n"],["name","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-name","()","<p>Returns the human-readable name for this <code>Sender</code>.\n"],["name=","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-name-3D","(name)","<p>Sets the name for the <code>Address</code>.\n<p>Examples\n\n<pre># create a new address with the name &quot;my-queue&quot;\naddr = Qpid::Messaging::Address.new ...</pre>\n"],["new","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-c-new","(address, address_impl = nil)","<p>Creates a new <code>Address</code> from an address string.\n<p>Attributes\n<p><code>address</code> - the address string\n"],["new","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-c-new","(opts = {})","<p>Creates a connection object. Raises a MessagingError if an invalid\nconnection option is used.\n<p>Options …\n"],["new","Qpid::Messaging::Duration","Qpid/Messaging/Duration.html#method-c-new","(length)","<p>Creates a Duration with the specified length, in milliseconds.\n<p>Options\n<p><code>length</code> - The duration in <code>milliseconds</code> …\n"],["new","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-c-new","(args = {})","<p>Creates a <code>Message</code>.\n<p>Options\n<p><code>:content</code> - the content\n"],["next_receiver","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-next_receiver","(timeout = Qpid::Messaging::Duration::FOREVER, &block)","<p>Fetches the next Receiver with a message pending. Waits the specified\nnumber of milliseconds before timing …\n"],["open","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-open","()","<p>Establishes the connection.\n<p>Examples\n\n<pre># open a connection if it&#39;s not already open\nconn.open unless conn.open?</pre>\n"],["open?","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-open-3F","()","<p>Reports whether the connection is open.\n<p>Examples\n\n<pre># close the connection if it&#39;s not already closed\nconn.close ...</pre>\n"],["options","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-options","()","<p>Returns the options.\n"],["options=","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-options-3D","(options = {})","<p>Sets the options for the address.\n<p><strong>NOTE:</strong> See the class documentation for more details on\noptions.\n<p>Examples …\n"],["priority","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-priority","()","<p>Returns the priority for the <code>Message</code>.\n"],["priority=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-priority-3D","(priority)","<p>Sets the priority of the <code>Message</code>.\n<p>This may be used by the messaging infrastructure to prioritize delivery …\n"],["properties","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-properties","()","<p>Returns all named properties.\n<p><strong>NOTE:</strong> It is recommended to use the []= method for\nretrieving and setting …\n"],["receivable","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-receivable","()","<p>Returns the total number of receivable messages, and messages already\nreceived, by Receiver instances …\n"],["receiver","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-receiver","(name)","<p>Retrieves the <code>Receiver</code> with the specified name, or nil if no\nsuch Receiver exists.\n<p>Arguments\n<p><code>name</code> - the …\n"],["redelivered","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-redelivered","()","<p>Returns whether the <code>Message</code> has been marked as redelivered.\n"],["redelivered=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-redelivered-3D","(redelivered)","<p>This is a hint to the messaging infrastructure that if de-duplication is\nrequired, that this message …\n"],["reject","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-reject","(message)","<p>Rejects the specified message. A rejected message will not be redelivered.\n<p>NOTE: A message cannot be rejected …\n"],["release","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-release","(message)","<p>Releases the message, which allows the broker to attempt to redeliver it.\n<p>NOTE: A message connot be released …\n"],["reply_to","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-reply_to","()","<p>Returns the reply to address for the <code>Message</code>.\n"],["reply_to=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-reply_to-3D","(address)","<p>Sets the reply-to address.\n<p>The address can either be an instance of Address or else and address\nstring. …\n"],["rollback","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-rollback","()","<p>Rolls back any uncommitted transactions on a transactional session.\n"],["send","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-send","(message, args = {}, &block)","<p>Sends a message, optionally blocking until the message is received by the\nbroker.\n<p>Options\n<p><code>message</code> - The …\n"],["sender","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-sender","(name)","<p>Retrieves the Sender with the specified name.\n<p>Raises an exception if no such Sender exists.\n<p>Arguments\n"],["session","Qpid::Messaging::Connection","Qpid/Messaging/Connection.html#method-i-session","(name)","<p>Returns a Session with the given name. Raises an exception if no session\nwith the given name exists. …\n"],["session","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-session","()","<p>Returns the owning Session for this <code>Receiver</code>.\n"],["session","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-session","()","<p>Returns the Session for this sender.\n"],["subject","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-subject","()","<p>Returns the subject for the <code>Address</code>.\n<p>Examples\n\n<pre># creates a new address with the subject &quot;bar&quot;\naddr = Qpid::Messaging::Address.new ...</pre>\n"],["subject","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-subject","()","<p>Returns the subject of the <code>Message</code>.\n"],["subject=","Qpid::Messaging::Address","Qpid/Messaging/Address.html#method-i-subject-3D","(subject)","<p>Sets the subject for the <code>Address</code>.\n<p>Examples\n\n<pre># creates an address with the subject &quot;example&quot;\naddr = Qpid::Messaging::Address.new ...</pre>\n"],["subject=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-subject-3D","(subject)","<p>Sets the subject for the <code>Message</code>.\n<p>Options\n<p><code>subject</code> - the subject\n"],["sync","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-sync","(args = {})","<p>Requests synchronization with the broker.\n<p>Arguments\n<p><code>options</code> - the list of options\n"],["ttl","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-ttl","()","<p>Returns the time-to-live in milliseconds.\n"],["ttl=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-ttl-3D","(duration)","<p>Sets the time-to-live in milliseconds.\n<p>This can be used by the messaging infrastructure to discard messages …\n"],["unsettled","Qpid::Messaging::Receiver","Qpid/Messaging/Receiver.html#method-i-unsettled","()","<p>Returns the number of messages that have been received and acknowledged but\nwhose acknowledgements have …\n"],["unsettled","Qpid::Messaging::Sender","Qpid/Messaging/Sender.html#method-i-unsettled","()","<p>Returns the number of messages sent that are pending receipt confirmation\nby the broker.\n"],["unsettled_acks","Qpid::Messaging::Session","Qpid/Messaging/Session.html#method-i-unsettled_acks","()","<p>Returns the number of messages that have been acknowledged by this\n<code>Session</code> whose acknowledgements have …\n"],["user_id","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-user_id","()","<p>Returns the user id for the <code>Message</code>.\n"],["user_id=","Qpid::Messaging::Message","Qpid/Messaging/Message.html#method-i-user_id-3D","(user_id)","<p>Sets the user id for the <code>Message</code>.\n<p>This should in general be the user-id which was used when authenticating …\n"]]}}