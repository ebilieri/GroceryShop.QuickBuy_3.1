using GroceryShop.Dominio.Contratos;
using GroceryShop.Dominio.Entidades;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryShop.Angular.Controllers
{
    [Route("api/[controller]")]
    public class PedidoController: Controller
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;

        public PedidoController(IPedidoRepositorio pedidoRepositorio)
        {
            _pedidoRepositorio = pedidoRepositorio;
        }

        [HttpPost]
        public IActionResult Post([FromBody] Pedido pedido)
        {
            try
            {
                _pedidoRepositorio.Adicionar(pedido);
                return Ok(pedido.Id);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
