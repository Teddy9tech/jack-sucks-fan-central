
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface ChannelSubscriber {
  id: string;
  channel_name: string;
  subscriber_count: number;
  last_updated: string;
}

export const useSubscriberCounts = () => {
  return useQuery({
    queryKey: ['subscriber-counts'],
    queryFn: async () => {
      // Use type assertion to avoid TypeScript errors with the table name
      const { data, error } = await supabase
        .from('channel_subscribers')
        .select('*')
        .order('subscriber_count', { ascending: false }) as {
          data: ChannelSubscriber[] | null;
          error: Error | null;
        };

      if (error) {
        console.error('Error fetching subscriber counts:', error);
        throw error;
      }

      return data as ChannelSubscriber[];
    },
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 25000, // Consider data stale after 25 seconds
  });
};
