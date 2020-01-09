using Microsoft.AspNetCore.Mvc;
using GroceryShop.Dominio.Contratos;
using GroceryShop.Dominio.Entidades;
using System;

namespace GroceryShop.Angular.Controllers
{
    [Route("api/[controller]")]
    public class UsuarioController : Controller
    {
        private readonly IUsuarioRepositorio _usuarioRepositorio;

        public UsuarioController(IUsuarioRepositorio usuarioRepositorio)
        {
            _usuarioRepositorio = usuarioRepositorio;
        }


        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        [HttpPost]
        public ActionResult Post([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioCadastrado = _usuarioRepositorio.Obter(usuario.Email);
                if (usuarioCadastrado == null)
                {
                    _usuarioRepositorio.Adicionar(usuario);
                    return Created("api/usuario", usuario);
                }

                return BadRequest("Usuário já cadastrado no sistema com esse Email");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }


        [HttpPost("VerificarUsuario")]
        public ActionResult VerificarUsuario([FromBody] Usuario usuario)
        {
            try
            {
                var usuarioRetorno = _usuarioRepositorio.Obter(usuario.Email, usuario.Senha);

                if (usuarioRetorno != null)
                    return Ok(usuarioRetorno);

                return BadRequest("Usuário ou senha inválido");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }
    }
}
