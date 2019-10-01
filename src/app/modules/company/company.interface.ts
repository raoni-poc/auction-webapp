export interface Company {
  id?: number;
  name: string;
  trade_name: string;
  account_status_id: string;
  readonly created_at?: { date: string };
  readonly updated_at?: { date: string };
  readonly deleted_at?: { date: string };
}
