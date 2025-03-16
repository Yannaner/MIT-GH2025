Class dc.Sample.Person Extends (%Persistent, %JSON.Adaptor, %Populate)
{

Property Name As %VarString;

Property Title As %String;

Property Company As %String;

Property Phone As %VarString;

Property DOB As %Date(MAXVAL = "$piece($horolog, "","", 1)");

Property Embedding As %Float(VECTORDIM = 384);

/// Index for property DOB
Index DOBIndex On DOB;

Index EmbeddingIndex On (Embedding) As %iFind.Index.Vector(TYPEVECTOR = "%Float", VECTORDIM = 384);

ClassMethod AddTestData(amount As %Integer = 10)
{
    d ..Populate(amount)
}

/// Generate embedding for the person based on their properties
Method GenerateEmbedding() As %Status
{
    Set tSC = $$$OK
    Try {
        // Combine person properties into a text string
        Set text = ..Name_" "_..Title_" "_..Company
        
        // Here you would typically call an embedding service (like OpenAI)
        // For demo, we'll generate random vector
        For i=1:1:384 {
            Set ..Embedding(i) = $RANDOM(100)/100
        }
    } Catch ex {
        Set tSC = ex.AsStatus()
    }
    Return tSC
}

Storage Default
{
<Data name="PersonDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
<Value name="3">
<Value>Title</Value>
</Value>
<Value name="4">
<Value>Company</Value>
</Value>
<Value name="5">
<Value>Phone</Value>
</Value>
<Value name="6">
<Value>DOB</Value>
</Value>
</Data>
<DataLocation>^Sample.PersonD</DataLocation>
<DefaultData>PersonDefaultData</DefaultData>
<IdLocation>^Sample.PersonD</IdLocation>
<IndexLocation>^Sample.PersonI</IndexLocation>
<StreamLocation>^Sample.PersonS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
