'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { supabase } from '@/lib/supabase'
import { formatDistanceToNow } from 'date-fns'

type Message = {
  id: string
  content: string
  created_at: string
  sender: string
  receiver: string
}

export function MessageList() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMessages = async () => {
      const { data: messages, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })

      if (!error && messages) {
        setMessages(messages)
      }
      setLoading(false)
    }

    fetchMessages()

    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, 
        payload => {
          setMessages(current => [payload.new as Message, ...current])
        }
      )
      .subscribe()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  if (loading) {
    return <div>Loading messages...</div>
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Messages</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">
            No messages yet. Start sharing memories!
          </p>
        ) : (
          messages.map((message) => (
            <Card key={message.id} className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-medium">{message.sender}</p>
                  <p className="text-sm text-muted-foreground">
                    To: {message.receiver}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {formatDistanceToNow(new Date(message.created_at), { addSuffix: true })}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
            </Card>
          ))
        )}
      </CardContent>
    </Card>
  )
}