export interface ISaleData {
  id: number;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  data: Date;
  parcelas: number | null;
}
