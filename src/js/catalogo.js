// Función constructura de productos para mi catálogo
class Producto {
    constructor(nombre, id, marca, categoria, descripcion, precio, stock, imagen, cantidadEnCarrito) {
        this.nombre = nombre;
        this.id = id;
        this.marca = marca;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.cantidadEnCarrito = cantidadEnCarrito;
    };
}

// Listado de productos de mi catálogo
const EST_COD_1 = new Producto(
    'Estantería Bariloche',
    1,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Realizado en madera enchapada paraíso. Estructura de hierro pintado al horno. Posee sistema de puertas. Un estante divisor interno. MEDIDAS Alto: 186cm Largo: 78cm Profundidad: 32cm Altura estante superior: 28,5cm Altura estantes internos: 26cm (Cada uno)',
    48570,
    10,
    'https://lh3.googleusercontent.com/fife/AAWUweV26UxlZl8IEqxgOHq2Lb79TBGENnMO05osNkglYb4_2ByB_HvBZNuh9QvW-ym2cDz9RE9gM_IKFXG1uWMARPmb9PCncNlHQEJmxQkHgGfIEyUYZ_8NA7TIZc4-ue2WXL187Lnt-JFrD_D2PbDViViBJTFoM9PB7OA2bTwXZATuJ2Ef3WLhMpSkWacAx70U0GLR_3h91VsBY9T0o7-ccfsQlePvFmxOxbEf1cPb9OiSXdhFRPLT7owt5ZOAOzzrLp73n4lmoigyeLBbNWTEIPNbU-HcojPXN-mceVZ9EcByAXS39sdrQpwJK_EaFTMDcNOUnu8EaZvh2VlwhQj5bZxzile8tQCKavEUH1SOiRd7AlacaF4QOmZIfowp57LPk7RPWkgc-x4vD8x_JJZ4Z-IBIsjSkJQsXd04usCQJd-2yem7lXAg0ZjwySWsqrRkZPFmRyXesKPucz7zGNb2ArLm9CfD2HoXeTfwuTjafAW_cd4nH8OUFOTaN1GWBWAs9_82q7SHeoD_xvp4fFxbWeW6pjHwqtIWZDL1SXn8mP1VJHypBUZKsQNIqwYByGovQHZc217uJO8o3GfqzQWNSr4zcPx3puC-DTPWMIFns0Om39VkRkRenbPuj-mJzJ9YQqvUci2ExTC8rvQKZjkSRSFScNPNSjSIZSBY00hcbjB9zUPdogwGjLBA2fr2LdS2Vde31-bujE6ax1MfceusCnD-9yHHRJUzJXodK8nQS2v8CC1x1_6pZPzA_mRYeASpySSwrTKhdzhoAvV3AS-ctUPLDShYRz3ULlQ5pI9NSzxVrA=w1720-h1162',
    0
);


const EST_COD_2 = new Producto(
    'Estantería Córdoba',
    2,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Estructura realizada en madera enchapada paraíso, laqueada en terminación mate. MEDIDAS Alto: 200cm Largo: 130cm Profundidad de cada estante: 30cm Altura entre estantes: 38cm Área de tv:120x78cm',
    59630,
    5,
    'https://lh3.googleusercontent.com/fife/AAWUweU_iw2rwhzgcJCdka1HvecpjioXRDJpMhxUqLLGKiIiQmQeVSi075y9eZPxWvAWGY7rtgPMmACzcGPgu1Ejjw6OVd50YTO9JxbCmGZkghTeO0gQpTlkMU6xarj6DRap3_3qcMGgrLkZXuBU3i1KlFoOda-4olgprAt1DX-ZfPiEnUiXAgAO9hX326Sjpd3lQOXsNhHMLngjuOexraqWnzQ3SMJWUQEYxDT88ReIiItQhz54KTXS1SiR6gLZmsjAEikhDS3enLe1ch4oiO711ihxXCjH37EzXLwOJHq-QL1gHe-drfBln5E2dOVh1g9h7yCDoVFxUAileriUMmk9IijO29snfw0jt8d-BwDPWqW_8k3meZPYboQCi0OYhJwG9PyjclX45zhfPHGqrZR-u6izU4VoiF9H6UxtoXg9Rs2V71cEojrvZHwEEwD6ZEPCaNGdqKHRQwUqdoTJYOWnnxSwZdcU3QCReeyPcKN7Ox8aZU69L4P8-nrGElUEKizqHOIrP5VCBIY-uf-4bXXQCX0M4GSi87I47e7gxBZCeh6uCaVN4Ba4osyix-V3rfA9DqHXHMyyRGW9lv4ksEhcMzL-oLkXMwQthlauOfuvuYL7kkFwt1V6l5Yj6eBG2kAKxJPtQix9frKqNvnNPu69JqaBcR1KdSNI1lz0pG36awAlZuO10-wJXTBjexjkPQZQ8ibolFwl4Jztu0Ga9pNTofQ-jwaqpwb30cHVY3WIC7IHVGI5K_VNWXIupXINRGc4MF95cT8ZGwx0b2H-6VefI4Kulfr6siGULXSr2feEcXTyzw=w1000-h1162',
    0
);

const EST_COD_3 = new Producto(
    'Estantería Corrientes',
    3,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Estructura realizada en madera enchapada paraíso, laqueada en terminación mate. MEDIDAS Alto: 200cm Largo: 75cm Profundidad de cada estante: 30cm Altura entre estantes: 38cm',
    48570,
    2,
    'https://lh3.googleusercontent.com/fife/AAWUweUeWsxV6o9B9dzhn4U0Pi2BiLdAC5qgncTgXxgJrb9nsDoTysJO0ntFOmAgtwkUkjAYSkSQrj9vk7IVi3T_-beEBVzKohjqhytJEGBXy9UqYxOJeptwgaU3TRP7hu1LJcaQJEJCAKcMOgk6PntWXTIdhZmCiwbApqv0pvkPMiEMtOXzWEcZWa1E7AtgkWEK73zM2J5N157iEXKEkzg5SgQ0NQghFKQl5tufZy-pwF0AdXg-sis85-HM4YTeRpbd8ofBcvbXg7y3YHaq9d7ZHCVFZ0y-a1oLzFPKe6TQv4_ZQFvsx02a6Xb4NRlV1BFAYpMuMXwCWTTq0gNhV_HJsEghsBETDTHwTXUm-eTHvrfB1_ys6LdsqjjA3mF7gpqW5IxZu281w8BUkWmKEoOm76kl6U3X0BuUpq7WHhyPPqzqKeYFQkO0JN4WbC6A1MWVDRXgq0D-jK4XeDEQgqweXG5nDPOggBcqx5-enpTCNAUiDpB1yKoy_te9sAEMtUKraeCNykm7JvPVkR_ncCBoPRPYJ77viRWBbLLCxsdmRFf7JOU4hTwhXOZkDPnTi_wCTY7DQq8ZfY-AsQnMN7VXYfvWVZVdGN7onbMHvCSHtevoYpa8jG2xx3NOPU4z5n-IdpGpqQaJm_Ol9ILzjpIOKTfARwO7oC--UObDu3lLaRj4L4CS7tBTj4ORsgft1xAfDelbqEAjQY9ZTrtTkTRNLw0jIf-c8VS_o-wJr-fJ_Izzu9mHetH04Q7emgeAaZHmi_Wezj4cO_LmSrvwA_LeCdjLpaoURnqRERgFmk2G-0CnbA=w1000-h1162',
    0
);

const EST_COD_4 = new Producto(
    'Estantería Junin',
    4,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Perchero elaborado en madera paraíso. Contamos con versión full madera o estructura (marco) de hierro pintado al horno MEDIDAS Alto: 190cm Largo:45cm',
    13290,
    20,
    'https://lh3.googleusercontent.com/fife/AAWUweVLPR6z9jf8IQpg08qoEanV0OCyNglwaKDHpdlc6nm0unwskrRbURHUvpDzSMfBH3kpmsjJteJ3t-TdCJm794w3iTqMkyD6vWBtNc1bOdVvL5SgUSyMb9e53R6Lfh2TPZKzWtSXCQ9cuKikpnuhWU1lOLtr5HdxtCIeBPoS-mEElNSqvFsQj-sQFrrXQ8hvOfRsZ-KpQ7JSCD54MIfpxFZrP_P-QbmahVC5vF_Tu6WOjdSG7ZXYqXAbbcw2WRAN-EVPPyDquIUdpFlywBXj8sNK29BX-YkYlifkxo_flU7ND3y9Ft8D2m3iTbMIyYBPbTZUGyUs28WoQq9Y0kefixhcmRkkuJCONxfNtaSvClG3CEf9kQYCWcIuvjmHs8O7SaE62YTfdXYaiu7Tb6D79NWAWc3X5unjNr3NNwGiW96Za1QAXFmoScm5yrMOwHQnbAWpifwV4uoWB6kmFaHC977wR7u3jgRZ-3PmysMLCXqpJzjurNmIuxfJP6GXo2o_92ZgOvAmUGRP9u5Oa58TuqAhb48abQ03HFHRo9pRLA_HO5xNgr1xYoDe99WpAC3iin9idNhNSP15NnnfVX2E4IYAdYHlIhe7ixC1QF9Gb90C7l9o6oXUBz2Xvxo5oHxrxNfF2oUbWXX7WW4WYNRMB4fVPkcp0PfqSXnXcCGe5N4U9OJw8Qk8gkUY82iD06EfyVGa0AEnwFLt404dbluNk1dmxwIEw-8ZbrG4Co4300T7Jvp-7j1CgYmCqYFTPOwG9bKneca8YYr_DAoeU-3vxhlTxM8oxpMBIUrEDZi8CUmzOQ=w1000-h1162',
    0
);

const EST_COD_5 = new Producto(
    'Estantería Paraná',
    5,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Estructura realizada en madera enchapada paraíso, con terminación mate. MEDIDAS Alto: 150cm Largo: 74cm Profundidad: 30cm Altura entre estantes: 42cm',
    25190,
    7,
    'https://lh3.googleusercontent.com/fife/AAWUweU94ISgJw_UScE6TPJZ3UT32tEp28IH6wD6sLQ3tVTCzkxnbyR706Y-3EptanKKw887jMBfcTP03UgyYXw-bV6-ZxzVorwkUuL7AKm0l4fPUnnDT5RU3x6nbnoLW9ijarSwJrgvvXRqEqgneM3OyLEMI7jyi4PM2sUO8vk9xXDI-qulMweApzRnPNkW88hi6-DFJKveucmfDZPEMmBSv6IPuwF_ogLuJJFKbDl-35d6-6-C2_l9t1CNpaQbvPcXtCCmHOaMBIUxrS0zREetU6rP0OcOdXNWikn4SR1wK6r5sfgn__iXWjIm6nmp2lqp80cGP0fQt2qnoMefzs_rlSovthFkF-N2rTfQLT4QZ3oiWSeQ8Kfh73QtZiF0b9aLxP0AeF3YE7vLMmNPCS-lkusmofJ_jABXy3oMx-8uXtWU62beqUWEBoY-RLkw5_CMGv7-nRQKeqsudsyoZvYffX51VnWAHR-SupUcnoMvRScheLn34VAHqppKhG5Qn9R6DeGFwTW6_OxuBWSBqeJ4q7sx2_LYhHENzi2RH_hK9vH0A2pGpsI2SCWL01ajFW63XF8bfPeFp1uxUUg8x3RhUeqAoxOHsYSkBCsudgwvzzSsT2pW_2HsCOhdKa8ZOJPCMXMUWItUFLlRlx3X2QIK-sRYzDXPyYx6pU0WK-lSh5u79tHKFw17q6Gf4i9NJJNCaVaI69ednDyRyOrCvJXKvpovHN3uH9ThIqakSn686r6TOdqE9aRC90rLe-If_AjtzSuZztA4HlqVHMeUwPhIecl1u3WyXqsKWoz_OH1QkyZbog=w1000-h1162',
    0
);


const EST_COD_6 = new Producto(
    'Estantería Pinamar',
    6,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Estructura de hierro pintado al horno. MEDIDAS Alto: 185cm Largo: 80cm Profundidad: 35cm Altura entre estantes: 39cm',
    51650,
    12,
    'https://lh3.googleusercontent.com/fife/AAWUweWtPuzTSA9C_TnVSI6oYZmnl3K9w0a-Yeky7Cq9966IuWCS5qrNeZ4vCeNBn-FYwdHZkrzKksH-o6fmpOPA_BoDWE1WBNNqL8hVKCTZvFfPNIo3NSAh5FnZ2_cuIaBXpMgGuKx0J0bnIvntfQcTZ25jHfzzEQVQR8NKcdKGqUP1EsUqcND1WoS1YR6zdBheHFhyi_CpUbbL7oqbMDr9Uw9FCWsJULFVwTrg4SOhw158OQmVZfFlQzi74czUvW85JINK1LibYIjJ5l7ThCxxId882_BNgfBp5O14kjTD6JKT2oOejoqxKOCWAKJf2TJxB91fMCTd4MPUk9RQ9TpZY3pdsr_eiX5TkKmjIaRSMpRamEH1GxwWHPaoqZFRj3QBrq0fK_CgK7LWEU59FGrlZnKE2Q9nSIb53T_-YOq6Y2gXVS7vBfExdArk1bTURrQ1lqpCFUU97JsIOiwxQvXuvj7uc-1dG9oPUCTP1ZoSRD42zqMkJ_WqKPBMzat71OHG7B1zMw24N7GD_UPQbOgHpf1-rDfkDPu-FpV-Hu0248dGHz11zoDZyk88xGb34l3Ga-qyFyWcjIs8mFVTEhFuo19Oh87b01LSTbbUukSbljn2SXZjjs4e_ZJUNcxhECZGBU15lzBM-1i0vK59fjmIUVtpyHsSVbBE43p-vhTREytHJpUfFlq45VwB5T6hBMXASAAuthEqi7qSshUKgHcegi3aSuh0Ac0q-cwIzNj3ONS4EngiErohAQko_ZqW1J028xn3MpjCOuUFFjYDuyjfo6yAKkVo5hvHW6G7BftyDnk5tA=w1000-h1162',
    0
);

const EST_COD_7 = new Producto(
    'Estantería Posadas',
    7,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Realizado en madera enchapada paraíso. Estructura de hierro pintado al horno. Posee sistema de puertas. Un estante divisor interno. MEDIDAS Alto: 186cm Largo: 78cm Profundidad: 32cm Altura estante superior: 28,5cm Altura estantes internos: 26cm (Cada uno)',
    138590,
    2,
    'https://lh3.googleusercontent.com/fife/AAWUweXufQ7GvllHsCj7-hQQ_6R6A0xvE_ZkecF-lHSogH_IyUJE1O8rI5SRQYwYzO7rgxTgBN_AjWdbZg-WlqtAZphqpFGPxZ3o9CB9zzofvaPCRD9Owl-0PGfi7gLbwWhzdxN-ufgOdo8TMsl4JVP-ITE6wauoJwMqvIS0F1UXyTZDWsW0m0x3xnj0YRSe3DCVLUNpxAJ93Hr-M7gMQyWMQs4VRodi62Pp_rCR1i0sZ7sOUvOnCDsv9Yzh-NQ_NCfOLpKMJE4x6OIyt4vQWfpQPyL0o-4PuV-1s0yAmGP4HgqJQz_bfhVMX1bGECvdH3R99NqF50DYNiHJ76CjplvpHzVFfZi7wcxvwyDxOhsjtxz_ZGnHZovMNpWujoYvEhGsJMJaOkoIBGQAanZD5J3i8EFuIk4-OLZOVE2zKGc8JBwNZ5OvVx_4yVO1092y5_HErzyAuT9abatc7c5oEFCxK4RJEO1eB-G4_UilMBOD9QJlynubNu3utrUL9EESGxgFHnUa7CLIkVWCdEAU_5U4V3p8IKtnFAo3QagAWKBEEfZnhlerUuPCs2AzeD22MQxrPCByarVQyl7E6MEk41sB9dxuHN7boochaWlFcQ2Jm3TWYRl0B9G_NseMiTfG31fESLwaQ1Xy7OKtACob4LbxSS5NbNHgyQicOmIsG9wfyurN4ScKi_5cYSHjcSTZaTB4KdXcIa7-jOHLS5lwU8PjDMeI4CqB7YrgyeOuzegw_609hPSND_pOH_37RPNAvVchW8IQCne6gHOWlBqaJzR83rupLqF90FvXUJbIvTFHa9I1_w=w1020-h1162',
    0
);

const EST_COD_8 = new Producto(
    'Estantería Rosario',
    8,
    'Idear Home',
    'estanterias',
    'MATERIALIDAD Estructura realizada en madera enchapada paraíso, laqueada en terminación mate. MEDIDAS Alto: 200cm Largo: 280cm Profundida de cada estante: 30cm Altura entre estantes: 38cm Area de tv:120x78cm',
    147690,
    3,
    'https://lh3.googleusercontent.com/fife/AAWUweVxXWfmSeOm7YaQmjTbmvClu_vZPe2mKldUIsaJc_Nt5hQHwxv4WkaZ0HAT4F7xt6qi7qVh8OOYGs8SUmc-tEWRb6g3PjxbMZNSV6jPNwFqADxpNj_Rf2PnX8AQ5hVrvZuZtCO-uuAXlLz4KUmAlJC6VP_1GBRQbvLJjSsL9RG_Xtm6qT8aZYLEZfk2DPWePX8ygjwSy_US5f7d-GVADm3E97mXoS9v_DHlnXwZD_glUV8VRDubRdXHu3Xjc5iDqvEUqB81oKR5BCtPpjcr6mV_MTTGdoXl46j7oPP9g4YUES_mI6djBid4mAAqX6GIZJgEtDewAPeSXXn5_8fKKxUe4sEQRARTFZP6mVUd28mdUg8xjCZFAYxVeVrS7yDLbROBVCkX_O2sVTPjcKv4m4t4ButfVmHRKnPZAAMo3jrtLOl7ZKelwlGbh54YeBaFjphUgrHRsUbJ4Nzypfk73LyHkpCWRnba4xiV1PCBI7_0FF-Tk09zJh5QKa1qcRh0etT24B6pfkdVPVmqui6BrxPBJyY-4kBNtYFK1gYkrr5A0ozSr_GvcmqhTVIrHlyvOEJL_Uum7XuhSdIo7MVGSoLh3BZcKmOX2-GXzf_LZUN6vfmo7lr2v3Il_wttiPSRG6xeh4nf4kJaJkhLYcpaMgPjUdZg7pXtx_cqV3pYy7u1FGBGee6HMm0HBHle_m1kcOQD7T46bGETLnR-UB1LuR1kMISbggwRsw5N6pDW6tWaCVt6sk5TTa_2Q3-crghJufnOLU5YUktuhFEf-NosMdlDFzm-YkRZrryDxch1wYW9-g=w1020-h1162',
    0
);

const MES_COD_1 = new Producto(
    'Mesa Armenia',
    9,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Enchapado en madera paraiso con laca pulioretanica protectora. Base de hierro pintado al horno. MEDIDAS Largo: 100cm Ancho: 50cm Alto: 45cm',
    22390,
    8,
    'https://lh3.googleusercontent.com/fife/AAWUweVVEXVDdyjVckiHUKtjSRfb_Q1OAW7SpG_rOSFdn4-zjGMJlTsXIxD1Vb_D-RWDnYVKfrvH8IwbU4tom1ftHh-FS0V8UaPr2lwYy-96EbyC4TiXh5IQV1bjKqaxdTichuTAWBC-WpnZRwTePTFjMQL4Wr6hnLruCcI7f8gO3X9sZDPTupX4UlnL3CXKEIS16yjIevSZ6unlVUc2JSdACK-S4EBDHTTElxun00s_qCPy7Bx2V0FFMbNfQ0POa_QCoCXWjQFyzokcE-1cIvM4RUZodNlOwWd3NyoPvDqyTmu3sKJDy6qU9ETebt8XiBFAQTqq53arGoB0T5hHcLF56afHdlehL8WVUcmlZdJMBIbFPzAC6o29sBjUymeJbXkZViyhnzpRkPlMBC8vVVBUalUbZahkNUj4lZXlxSAwIvcv6Cmv0VxflixQi9X_WrxANS4dx-SrbKfPhTSxhFnOwp0967YbAciCHL1RnqK-c-TuDWyPd4r4m5HOkpptNFx892aj9HKD3o2IdlQiMCB-1kdW2SIKzkqr01woWOsy5jijMkNMZ-Kj7wvbrDJpKeQITbnb4u5EWlLiWzZKUqVJFq_85cA7QZf3ZuxFGGasYzUZu0TQ37LaGmnNye9k7QwQwgo8UmQaGP_B0w1iuvu3aGe9cvNeS2LkW7n3XwBJJH0P4F6F1mPYJZg2XWIxECrYAAMzyzBT-_nwGNPR3D1q1qYV2pDaQ_fQuGbCVfC9i9G6hg1yMiebCT7zCHyVEo_tbnS-1Fof_JeNxojygPUD-PXOBWXWV5HNbIkT2D6L0E0ubQ=w1020-h1162',
    0
);

const MES_COD_2 = new Producto(
    'Mesa Boston',
    10,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Enchapada en roble americano natural. MEDIDAS Largo: 117cm Ancho: 58cm Altura: 46cm',
    62990,
    9,
    'https://lh3.googleusercontent.com/fife/AAWUweWjJF74s-DSzfztcALiegKW9wVPO2rfit83CYSxMShRHdloJnLV24O-2YDJI8NyQGuamzLNsM278sVzddIBTcV0O7F10VHI9zbMh9f9tyNSSSG_c67u3Zs2GrvR1JPD6VHi--3Xywnfu1aHdzFPdSgLwb57M56ACzRODdvwqfCPVS3IQSFhbsi5ZlYREqQLpfSVWJzqcFzHM86RVGXJj6fT33fLgk98xVuOQoTlr-mvXpV5NBlr6713H5oULgUTvBOoQ4kcPtczFc9FkA0oeBCN5WZwS6l5GYcDDGvPiLgIuXydOka-jLRm9OO8wf2dPMrR-pOUwOZmm9AT96V6q27IRLWNNLMk5HZGh1AofpBJg4nU6DTa2PMUSIWIQvaTmcVfE3WhMupz00u8c1zWzRxhJbR_A-XxUj9MoTZ5j531LKsdQtrdVItMItoQrU6L-SpbRVOQOjCtaqRfHYsRehvl_z5_xlYZ3xsQka3j9DDFxN3-7emKd1-jGQO_XhywWskVdVdQ7Yw2mbyzvkTHwL0eG4sK1QEgX5dzsN-rOjMm3UhRm55fATlfaBXnEKsQMMS8m90goJbSN9U5EwXygcfCuTm9jK5kXq8YIdq-EIkh1I6mLKLOEMkVOEKq1jBoJcFQ1e0n55u-c1FZw79KL0Fg6M_xZgBIKOYsgBLsJFdN4iQKV5UXhzkkApqmk0e55nTOTPxC8ueSo52yMAeMzswXvTN5-7I56m0Qyozub2s2F9rDRy_qq0eobOUZs6ryB9ISCNTaEZmKxrt4mY5CCTzPluMvLz0linlbzFYUcgL3HQ=w1020-h1162',
    0
);

const MES_COD_3 = new Producto(
    'Mesa Bruselas',
    11,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Tapa de madera laqueada. Patas en madera de fresno. MEDIDAS Largo: 120cm Ancho: 75cm Altura: 74cm',
    32190,
    15,
    'https://lh3.googleusercontent.com/fife/AAWUweWOGs-za1TxkLgllFAPzuoBsYWaJ6zwCg9NzP_zNd8YENUvilTSYMdw7Q6zV_UoLLw5kzG1HQc2Akc6qjHM43XfvvwOvoL8YOrrxC3NHEDPVLudYE6xPVvL6a2uWA5A-oBliDzWVCgQDu3Y28CBPUJmHTL47Uv26sXfBt-z8-wsUHhM3PDzkAA3OCIgJtfD6D1yiyVcIIUprIcFlpJgAvCaR9wzyLQJVpZrN9uDyGxzeKbK6KUS8nV0ckGQuJ6Hjj-wbXc1A5mRaQegKAr2JjnEFho140KtTkeAYe5CmbHACZTGpdJJR4Xezq3qE5n9a-8bjWKi-xK8xrIcVIv93dI80GnCc2gPLDyMwy9R7FGaLcxJGo_CRWy_lWySU2YSg69NwR8SlDSEjHfu5swJlRCO--B9LqsGdZljW_tKRH10Ve_ifhconaNd9yifL9Cm22jyK4AJDk898l1v9xUlQ1xIcZbVtmXrqaiR_-Mqlb5pX-GGrgAoeDK6sFPznIIjqc0uXPkuZwYg8-bg_A-ZWCHL1nviKXLVHtDMdkcpJAdbV7yLj6PcG1WHmUh0ANn87OIC8zwij3XDZa3XtXkjUHlUfhaGLkUSZ_wYOU4vzSOCJ-OKhnSOrbgeCCfsEWCGiwtgWJdoRUKX4hN38qiqFnA6LSbsL5BaEvKFD2xtNeaMmJv_O9snlFD2-l31BvCxoG3BVIrkCFfK6ToNF8dgZLsr9yXBPsO2yYNRcRd9pRHe06cnKwTX2Vg0aThXjrX2pozl_p8l9FVZNexIjPirOStoQm7OfZaQpoNGUhEoZD77ZA=w1020-h1162',
    0
);

const MES_COD_4 = new Producto(
    'Mesa Cabildo',
    12,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Tapa de madera laqueada color blanca y patas de madera de haya natural. MEDIDAS Largo: 120cm Ancho: 75cm Altura: 74cm',
    39890,
    17,
    'https://lh3.googleusercontent.com/fife/AAWUweUnbHn7YA12SRQzrX6LyxtinLoiZ73KZfme6bsYQNQPd2tfiDN8cwTVe5txGUMu_ILA8WEA8sLrLORKflxEdMgu84MY1GJ9RpdpisHQxzYwsawfMTni8yoOcWUXs44GPAkc6Eqfpqwog9yb3E2ZrQqa-ZfHpw-sVo8_-aK2MUpjmgphw1-1O61FWLcxdhU_gcHggD0MHElho1fjDE3hkgcVhcxu7QwFzPnVn_m-DUzhkM62ai9bx9IcC_N7_rK_kPUjOevTyKht37wgdyd41ETt-RYWiEf8WIPSV4gDA_NQfavojwdu2rs_gdOhpMlZqEkQGQzfkbsnu_VRZA4iqwVa3gVQ1rnXNwMqqGy9KlimyyNktTPZzflIWQb2ADYSvqxMFheY2DVcdhqWzd4xhuQdxtpF_nJTwDCrcY3f-oN3K9f0Hu7aRVGjaSJ1-dHA2DvI66bEMaoQwAHt_7otFzE0BJeypswrcnV-zfslXHBajRgLqPI_BT8fLlYTWBvuczLwl5mI46W7Vdmch-KaHOpEmx_bLUQdF-FqS8OS39-76V4KIYPPJDgW_0k4MBeWdVd8BsjUqRVwXXXrZQnoSetLuzz7Q7eL3D3aA0sMAUfmMFIRnG9UsGvNUVwInDUsAEYVyt3TEWJQgyg_xyWFvHI0URZWoC1oaB-5OKX22vSl8VEFyel9WWooR1DZktbHFd0-eX9-RRBkOJYIFq2MmVFQ57gBBpeT4v8nBiuT3ZodSMQ0jR6OyzTJIXTEN9-ezRH4xW_5bCgX9Zj6J3fFsfLJqT0uSPDm58FJCYSU-TKhIA=w1020-h1162',
    0
);

const MES_COD_5 = new Producto(
    'Mesa Cariló',
    13,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Tapa enchapado en madera paraíso en terminación mate. Estructura de hierro pintado al horno MEDIDAS Alto: 75cm Diámetro: 75cm',
    23930,
    16,
    'https://lh3.googleusercontent.com/fife/AAWUweV8TWvRdjy51B9IYeEVHH4k87G2auApjnbPN9XdDBxj2R-o6tYgm3sCxU5vYeoISXr0-ezSqqmiNk0C5i-dQmNVvT7QAPIKMuflzj4iCgfBR9et3tv07RyEYsIzXASR_Vf51zOyOndQV-Ab87dUzwx15s72vHLtlOr6NWuFS2NM9Dn7n9xH3XGh4GjnL7yu1ndvE5jLHjmez1I9sWR4kY9q5FAeP-zOF8Cn8C5kTy6IHMHDMvscKR2l6mReqyju1zBD-rl-LGzgIwMg97W9lkqDsmNtnbfUg6r7EAfo9raD7j01TrGGxxNZxqifemupCMr-9X8JL6Yb9bmk0bggx7AihTbHGTb54V5htZh31-T12aw9EBDrcRaA9vJQzwtukJ4M3u99X9aLeNBrKri0w5yLAMi9FpSRsjzq1ETHuZkL5YWvCmDNkreLYFVw_Ds3gpQiSSJ1IH-UzvQe63jvPC8TpHMUjPYvNcUnpWVrRGsYAmxquyjCLNb5qPuR7bp7AdDvd7RJf-voavSbdWTBNYF-h7tnV0mr7hJ1z7IpVofuyAlos8Pff1cs4bAJHRNOizYVZa56MPMEYflOWS6l_AIYGVNVowcZ5KqGw7Qj0jCcYrKCdbDa5WMPjQUo6m1Yo4I4EIfouMOpE6XZArkFa-gtAJR15N6f0WAp_fAB2lsDyLy08T_ptIO1H-sSGIatjgs-vfdHJNqGNTNDirgjWDbBOsscymUPqIYIMLHdebKqo9M6ckyk24fynPNCLDcvyHKsoKRdjjHmpUvntR5GnL1_BrLuLBRRTB5g5_4_gaOWag=w1020-h1162',
    0
);

const MES_COD_6 = new Producto(
    'Mesa Libertador',
    14,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Base madera de roble americano enchapado natural, vidrio templado de 8mm MEDIDAS Largo: 120cm Ancho: 75cm Altura: 74cm',
    74190,
    5,
    'https://lh3.googleusercontent.com/fife/AAWUweXp9YXVHhvCPUUr3IlnyiSddA01yvZ1WxMf6MkqWDzTgEVRlMLLTiQHU6wPkCrkO3yumplPK6WHplRobpUoU2QO_SGlMeIk09gMVPs2WNAsish-sTmDFYNHPidBnj9E4EMm649KubITCrxsnTT-mZJzPuZeogTfbxofXDGVoa87F6KftAwtzpvU1MwQlHU6YKeIMYgDqsD6tZbT5yC-3_KW6ODPEePKDvuFzo_tJ-quBYuqmkaF6vXvAlyHUsrJAEu8_TWF2I2Bv1mxh7dN9EGB55Kn6vdZ-hI5Rk_fZVTowdah7W4zcIfSHDDKUiaNm65B2u-sdd_4ByY4zA39JsV1DHyA1-FZxcpM-qitwtFiO69oSxLJiyTTVV9VAw3T43YYVUG2VRWbFhskpwJnZZSnaA3YDXK8q9qOYVlIoY1x4263RL6mQAEKBm-zXG0skGZmFv1V_GiZ8rX4IOZluxvA73puoNzvQWJh2n3HtxgVmLdEKTJOTkZAjipnvHOMRq-2zzUxREAkLqw_UyoWceTryquFNQcWGjt_SusExrFbxwq92wEjdGlMPI60MT2qdhsOTa6Efo5uUyTj-CBE4WJuUlWP6Oj79VEk-vbOxlaHKRmhZBXTT_867LU6GqOZR_vZQilXkkPDrk7a4UroTMX24VmzRuVvsPRIZ4Di304y3EobTb1z2npLR93jZtdG7vPj2wzjfR3s-2a8m6wj1iqANo3jO1Wb_hVAwnMW2oJaDwK1d-q3xfUWCD13Crhy0z8A0C7tlS-4J8C6JcN3m8Stwe-DuoQrBSwiP_LpcIO83g=w1020-h1162',
    0
);

const MES_COD_7 = new Producto(
    'Mesa Málaga',
    15,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Diseñada con tapa redonda de 1 metro de diámetro. Patas y tapa elaboradas con madera enchapada MEDIDAS Diámetro: 100cm Altura: 74cm',
    58790,
    2,
    'https://lh3.googleusercontent.com/fife/AAWUweVNpN7WkHk1BVApcQWxIF8o61WKeNaGeDl6htue_1uqKYgbXW26y9qICf4ZkvChcbLhykdsRSeFli9pnd8sF9F7hJUB3y0AowHqeTMi35cT1j2X6tozp_AXienzhJ0O2v7xOZ1XJKfeuhZpHRI4IBwUJywOmdGbCdcLzUWHjRifKRGMqcpakKt6Y3Wz9xhoIdsbvOWq4Y_ZufpRWwXfx9Z0o38f6hZkGhEDj0so707JvEy9PwA_Qltbr4cXVLYhmfEtvzZYCecovVMwHsXq3nXVdkRpx-8oyNq-_hYiCkBW_2L66rX4vKHRoAmUqK78HCzfjP0KWP_8fiLmPsIcWOaJKkztmhUJUFmM3yO5OdxVmMx6BQrqqnaDI3EJaT9nbypS6zu7F46rDTjI3rIpMl3lqNQgp6FCukChjcUuZltn6uGrp_Y1uqanK4uSiFRI7dCTM6JsL6gTdZ-3JZ34fuo-tT1er4A6LPaygwCn-nCr2x-0gp-mxkazWkOPcdc3Jlbsmaz-y9PNqS1bZh9Q22wqbLcfe10tAbBnUv2Ef6eUIPTUObW4shEZ93NYjEWvBrK6YS1a-V8iFqr0Ot6dTySAr1hr5pqfHineowcNJQqtgbN2j9OpZLDH2WRxCb3IztmKwf3Ac40D-t1w-QqPMlmW552gsRX1lQF-X__6G7b3qw726mxj9zw_a12G0UmIj8NDIKYambipPQQGIXI-0kJZDN924WEfjZmPuMxOKUiv4mQx5I1jpeYFtJYcC74ddvI9WsRgSTM8zNfCeIy7KW-lGRKQG8R70zr85-RMb89N5A=w1020-h1162',
    0
);

const MES_COD_8 = new Producto(
    'Mesa Mendoza',
    16,
    'Idear Home',
    'mesas',
    'MATERIALIDAD Tapa de madera enchapada paraíso, estructura de hierro pintado al horno MEDIDAS Largo: 120cm Ancho: 75cm Altura: 74cm',
    28690,
    9,
    'https://lh3.googleusercontent.com/fife/AAWUweU_78oekGBWGHmFWelUca77zRzhcyygnZRQMX7_e_Le2brvscfJBYFxlu4s_ftsHaaLUw9nUSap8W6D8YUSHtr70ms5I4dpGv-KyGH9RrbxwGS9TNUUekPdHTz0nKLwcXI_yDIWSgd04RJGbtGt6aXZL-hInMMaPJnC7RYNZaZV3JuFS06wauayU1Q6MMQxQGzHbSv43ahYYSMl5NoYG7iLc5Yjk17iDElv7a-iTeSkWdsUTl2dThEV-tzgJjOR2F_azzVUEV7jyRLh5Vkkh3nw-eT16DjbFjPd4i--PnKwF9lPCj5-fO2yboIFCsfVYd-IDluaIR2Z01gXfPAnCFPDJw5p-vqCPxfBzoo4ds_0HKgSGswc7z6yVUCovC-crFyVkHpgJh3jUB7X1HKZhbIAaXug3nLqeVEV8feCS9XtBkTIz01UZRvxorgCbyxf4boVHBf5cEFEykRUCadenDcU1OfJjBKlTdIE1h3JAsjK2wj6sOXTzpN2rEXP0_orPdcXnW7wimifN83a9vcByoQQLb-uYXdEYhGbVo344hnzxqlhjBqtETfEtOfpUks9BLZj3euOW-n4gvTYsithoD0DIhKirWsNrIS6RiEMJ00YmBFCm5WjxqHW_YJwjhPUvgy4X-qVpgICfeirQnLVG33LiafKdBMxVio_iCjiyGxtwBAHPTcaBsB0W44lmo_PNyL_dfkGlxvp5ESt07Xdjrhi7V9A1E__ck34y2cEIguSfHMX6-30UtNHgsTZ-sncGI48SRAETDmZvjI7lzsEleSa58LBBWC2ibdqS7yh8SM5WQ=w1020-h1162',
    0
);


const SIL_COD_1 = new Producto(
    'Silla Asturias',
    17,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Asiento de esterilla de ratán natural. Estructura de madera de Olmo. Respaldo de madera curva. MEDIDAS Profundidad: 43cm Ancho: 40cm Alto: 89cm',
    43654,
    20,
    'https://lh3.googleusercontent.com/fife/AAWUweUcSl54uwrdpo-2wxNivxQcKb87R5rxGYrnO_bvGVKbSMKZRPu1CR65i9wH4JfLPUSgIzapx-FHNygCV9YRi1XFXcujSnmyKadEV6b0c80ngdUK3DSdHrVwWSQNu3eusG8X2QGxJIF1zdSmdX-CmsaA7AfKfLLx1tI_WPHse0ToN_yipMqjWLFH3xFt4p_1xGA6CIxgCX3LtBspQtRHP88dFNbF51-RAPSrfkuoyCb5roTEtSwfHpSsofKzlj7aUvwyhtnRsFYevv-kURpcIXS_Bx8NCG009R0BLmujyNtHfkoof-SIBb6awZHUxlDFCxHWwBry1_U-LFHDQHJezqrJA6uTqrQKXlzuCxVDmh2-WC2r9P88je5dWMdLdBGGyM4d9CndO06krTWQR0NfB19awk4Sd2vjnyA21CpTyiUY_QLRkbYRtxyZscy9VMmkGV4-ItyQ2GL1dckSXmsVxoNovyMYBAgKvdupeOrviTGypHK2XcBu99-MR7eHbJYO3y8Tq91BZBTs7Wa_vu2NlLUVvprMB42ZgWHVGN5K3DspHv_o9JWO_f_XhEVglYslKid80qBeE2nzUPcOSc58kh6VVr4lMse_lrbnOhdb_UxukqfMMZoOGFiwNk3Wk_ob1fHsnJf1fFWaEGKRVXEZEMQZcPbBj3zWuP0tL0NtK8G19BN8NlYOPdc5y2tjBtkeGVyX6_CQmIWk-65A-tKM2q4AtdzmfSFOsNN1cYsyklwnaXC3s-F7LSOxURsPySLkCIq1vwHchxiDwg6B3IdsgJJ6qN-6Nn6ES9_AvGyL0MWfnQ=w1020-h1162',
    0
);

const SIL_COD_2 = new Producto(
    'Silla Bullrich',
    18,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Base de Madera de Haya. Disponible en Pvc terminación mate. Almohadón en ecocuero . MEDIDAS Altura: 84cm Largo: 46cm Profundidad: 40cm Altura del asiento: 46cm',
    13640,
    25,
    'https://lh3.googleusercontent.com/fife/AAWUweWuomjAuLI3U-gqpZaifHOQxfolovHCrMdwJRXDtdJpbAHedBQ4sx8vCAzw7RAYh5xenAt4Z0peYCvkH-7tF69XagFOBUO0b4pdjzgtSD3kSVlxw9MiW7PV5EguGNRz3bkRoHgFbljFNGYjp5dffkJaYTf4lgeCplbCGBojXq5aDv-MgCj4KGkE-gpT1iE42A8CKXKSnu8sw3Pzsv2bf98Sls18fZyWqYfIBECDD0cUKnPQ02B8IqJwzVndy2_436tZopUsEOwllXaukhU1d5sThVMzw2g2OcPZBkugvLT4rwxq7JXE6AueSSYFt0n35Ie5WQ31PBW9QU6PO0h00j52yzF4DDYc-PX9ao-Aawg73plm3zEBGoskwbDmd0s_HkNKvI8vfzWc6aKOruyxcF7KmWs_5_L6LGsMtzqJr26QQQHTwx0kH1s7piZLBPEr__fKeJ4ZE6Sj0i3_FmqrSY1pxa3gTMfjdvSiy1GYrIVYuutQskBj-m7mzCIhV_UB100Pm9yTTICof7EhwcxLPv7fEJM_82EwBaBSeIbijBx6S27CPtt_1WJ8AMaMxSNEvf7S_PjsVZtJNR664P9rXny1DBrAgCwm0modIEz4bmqRb3MRit9XK9PWQjpI5MUqC7217LNXG7IsAZ3tvpNSF3hFroWpPxgxlGX8VsyB3MwPnFiWNORCzblEHDyj6AqdDZJtIs_T8LFBuhlf8MtWMkGJGXC5kimZeigXsMMengX8_ehL44OcXrXXO2uS05rJXMxZbJmKTDnVxbYZu2EgBa4vX6SgvoACV4tI6m5zCRCGLw=w1020-h1162',
    0
);

const SIL_COD_3 = new Producto(
    'Silla Franklin',
    19,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Estructura en madera roble americano. Asiento y respaldo de madera laqueada, terminación mate. . MEDIDAS Altura: 77cm Largo: 48cm Profundidad: 55cm',
    13780,
    4,
    'https://lh3.googleusercontent.com/fife/AAWUweUKUn2c28iwyR-EEJatfIczpfpQKsoB5OhrkMBf5itTA6h1LmubcjjML0Kolc3Rak6Zt-8g87nctIK_gfhfCw4sI42HdX-Wv8nqsNOpx4Om0wskliCRlrHjsAq8yVJ4lX28n-i6qrg0tFwrYmidRkPEiIkM6vxxxjaG4RR4uaCTRzLaZF-HAs9sFcu6YEGIqY5EAttVIw-uZUsbwUx4uxYD3qB0AtBOnB7ANOmGojXGrlm3LxtGnx-1ujt3HdsoMKefIG-pSd-B--aSlRvm7lAS3hT8WGO69f8mTkUmkgMxX8iHVwbmAQ6oH_nnYMmyPQAGTIYaK-aT95CAPaMy5r83XG2fLBeis7h2k1HMd5z5NZYhTpQs1RDp-Tec_tLJ2NV_9estp2egMowdnfezjgD4VNS2qmIcXqiR3ZOTfNbUtNQeensiGOQ23OImmc895GbWbwNFv-guxFYmrwFnEahAXZatkZ9kghepi3C9N25yisx-0dQbinvmaJfuBUGgbxmOAtPL0BxYJ7MzZUKHRpng5lEbF3bGyj4ikZuggfTKrMK5ZwV7IhalWnlITeoMjugm_ucILikok9XmIzZiYfH7isb8334KO8ETSA-JjfOQ_g7gKeXbgEoeBykRVqaHz630OGiTPYAnLGzBq1xwUFOfz5xagvXKolDQjGFz8xoWdboKn9SkMUjIPLicvM9jiq-pWCGzXEsKEr3xcylSKOLfhT3ui9dEN3tC-Aa3VwF3oqMAHqkje-MA5mPLWaTngsqUxqT--H9K7zoGB5kwLQgv1rEo6wSBKkimZDbv8DGg-Q=w1020-h1162',
    0
);

const SIL_COD_4 = new Producto(
    'Silla Letonia',
    20,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Estructura en madera de caucho color natural. Tapizada en Chenille. MEDIDAS TOTALES Altura total: 85cm Largo: 49cm Profundidad: 62cm MEDIDAS ASIENTO Altura: 46cm Largo: 45cm Profundidad: 43cm',
    24000,
    50,
    'https://lh3.googleusercontent.com/fife/AAWUweUs_IK8oHb58o7sKY3Bmvn0Mg4j4ILPGwOgojWL9M8tBD7QinQgwY70EkMj6j0eORcrMhvzBEjBkcZ8TYsZehQ0iRzDx9l74egC5CLezKnsdSm4U7V2LnTBP-7aH7l-CtuwRmhu-sYGqjyLC0n-aqxl9WeQEQAS_3SND_aMHMrfpIpc8oTIuCwPBSq4nNYn2jNxs7YRpoZkpaiFY2osv0iX5W9pM-DRhE4d1-K_mAeACJU2FCFe8iDb9VbAFNq_KsURaWneqqwMGF3nbdgjSkDHRX6A4mvKjRBJhGOmQidsF_eAJ9Vs6QbylBeTZAxjqicNn5aDVUw1QU6OoMF0j2XMaGKBlMeQjO1wZZ5dvGdCC3ACagGoLUylpo_Zutne1LUeuU5vxhVLrkYi8ClKExMZY0tSyH3Iwnh8cnwQuIu1r3OQ2Nn7pNvDMhJpuenSBYpfwBIcmLMl6e2jtyCrnLUZ2HNGBcY0wIcTrmBnrg5a61S78TXBH4ygwh5qp2LuRS2sF0sWVGZkkYBfnEYVGN3GF1aKfd3Bk5KQwrJOusQrLFYxs2_PibnwdWChRbRhk8VFYVcMXMy0YR2lVUwnrYcvqo2drGEXUuhEqSK5qdlB2MEOcf9Ncnal2mbtz-cf3yFyboOCVTgvbwf0ytPx245knTSx63qiw87sf5nDVswx7RUYD2uBXymA2NusNIcZ-BBryBYVuGo7hyI1m4fteTDT_B8AlIIOi7pNUCwmF7UzSu3PHeDKGeEorTVV8GJCaKnnBqlYGcCBZiLyTCRY3NJvOEHA_XmPJDlpkzkTUUPUAA=w1020-h1162',
    0
);

const SIL_COD_5 = new Producto(
    'Silla Marruecos',
    21,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Terminación laqueada semimate. Realizadas en madera de caucho, con similares características a la madera de fresno y madera dura de arce MEDIDAS Altura total: 91cm Largo: 45cm Profundidad: 43cm Altura de asiento 45cm',
    24490,
    17,
    'https://lh3.googleusercontent.com/fife/AAWUweWDds36wP2CU7vatzF9G02ZicjdYfocHQ4JLKe-Feupa4SSAe_XeTdhKestTHd0fE_PxcbQ5_DCTgKmV5L4ePqXypCj-NBld1jDZzmPXqOv7t0AKAMWx9y6V6acjSwIAVB08NMB1zcUcTW8Gl55H5M67udSqNsZczh-MGiiQ8APCk00d7DKocBfEJmwCQnT1ra49NEAZBhDZio1VQahzZFjh9S9RGcKK3OXXymUcLcwStLSTEDXaQ3ObhcdqNfp9oBci8X8AmlyhnRrq9nwaMVKxM33-Fqp6XLK8xKGK9YfNruni8rtvvDalrDPOeAIApOVHq3-pEdofLfBlhOdeZOdd3ZZnj4-T8dnw6sATceF7Zlmypw-sVTcEd56D_HMYqBUfeMy2q5AkYRzikkCBHYmq68bvFjyQ66cO5yGBHeYDDefqJJuREfwX5NiPYDSax4eytsBagcyjpFS3lCGJ-M1h0XmUdPYg5WoMi-euARDgyVD8zmgpp_Q8VEvAlQCF67uTj_V2W-jQj8XMS3MOg6ylWYQ_Z42RvJygra0CMvpBYdF5eieL37ADbOpF8YoxNvoIivnLNWVMzJeXKZmK5aegismn8lKloE7qPliTtRNKNOrJsevc8c0Rs_ZGdwqQtyLwSymIvISVGEQnyCIhR_tAxbXT-L1YY3RsnhTzvgvqlXmg2hHrzzO7bxUXrJTW-ILbGrIZQbyA3GvMibmYg_T53MdB_Ag1i766Y6ajYNljMA0aY3VR8R6Dydln-5QDsW-nllK5X5NpCsvDskCSjeg9EyBZTN-4vlxvVovkQJzZQ=w1020-h1162',
    0
);

const SIL_COD_6 = new Producto(
    'Silla Medrano',
    22,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Construida en madera de Haya finamente terminada y moldeada. Asiento de ratán sintético. . MEDIDAS Altura: 78cm Largo: 48cm Profundidad: 40cm Altura de asiento: 45cm',
    48990,
    12,
    'https://lh3.googleusercontent.com/fife/AAWUweUQVsxOqg6Oh4XcFJQQaJynJzjOX_BlimW-7sltGrSdxgzvJQt9gdtJLVRiacbCYku_S04v8OygpUbbuQcnRP1VEyIfjPDYrilQYK9e82OhX0Kv8pfv965mQHEIIkO_mUoJ6IP8wW5F1MIln4qxi74CiUSzFNwlPY5XvL1L2qyHcadrMSXE-lkCADDFOEIPhAya9q8QZSZ1k9us5zmAMRbDDOoPrvJFmTeO9U4EEkW4YlvM-6UT60bahbiFzOyGXGGYqoUW6TZ7iUbilyhypBk-aOirS8r1YgWZ4UA6bxjum85YfA_hhrcZm-m0kDZsSDYl7UL0G0CjIC1GoqdJFuAAVEFZhP0n-hStxyTWWA0_SIA8BbAK8p6lLK1qsNjw1dvzsa7DK1-PItlCmAys3KS4aUvw6C84T4b46KGvRJMuvJHV3MoEcxjNhCoq65HHzanW7RBpl0vZJ1JrWKxXSbtSSPENPLG7R-Vl1Ktg27OIbTLK-uuL1ErCHqpxmkVzet0WFEfpmDMq1-YYAwmt216S3PPjmjh7kAX0jzE6JxPSGQ7dE3VIpF6G-n7HrE9C49uOHTFbDFpqJTDww4wGbj1nbwZBX1rHSeaIvke23tgm7ocQ2Gc-s4TEvh9DvHHjqSUy2ipnjAsna-6JZiyU9SBRAdH44-EwEgngKQDsc6tqfTKIbPu5LWnf_Zyl8v9vBJhtmsHhZexsx1G84uELqHzPKh1-w7StnepgdLa0J0xd2NO_ecdbh7K_6232Ofc35gQaJBYTGhWVQbSc4BWkXx9NMm2onr2HuTGfP807qZ7wmg=w1020-h1162',
    0
);

const SIL_COD_7 = new Producto(
    'Silla Seoul',
    23,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Estructura de metal bajo el sistema Wood Hot Transfer (hierro simil madera ). Respaldo de PP Polipropileno terminación mate. MEDIDAS Largo: 54,5cm Profundidad: 42cm Altura de asiento: 43cm',
    16790,
    32,
    'https://lh3.googleusercontent.com/fife/AAWUweW6a9kKctV6eZK9YkD-xyswLMz0xrKdb1ABKgzaaaojLGuLUachcFCgdf2pRorTxGWtcVIZT_906OeDvfKn7ZexD95lRYaj3m3a6Jkg1jZ611xc6DHyJuJ8DF4rjNdQpOr-sLjrXgxPUFrXtG3dcKYS13yzvFvVVDv_p9gPRCCVkh0OpyJTHFPWgAwcKpqRszxZ7D_umh3w69OblXUg53uLnyaFACQ4ZUeIVB5EzqL9wsuBrOLINSlm7qLLV0GmUJeY05FsFseaqyXWEa2f14JBHyQvq5NH3rlQsNLyKcY6KP2D6wUDLWdUdsdhJdioH4EfZ07ChpTurg55iaFDK9hROLn5ZsxIGDVV6_kKEAeWkKoGSVga9hkebvC1t83_hJjId5eYAtmOyltTZxmtctlligUw-Mx-j_uxOE5hYrD5NakOwu6AwB7JHuj566Dd8-CsbB4g5WnKHhYwq_H-9z0EuN4TWqlHy1ebmlWwwbjzxru2hc9ESxxv635ycO-iJcnWHUEjRsGrbxLQds2aEoRqovMyg1rq1fpRJNn_BPAvsTKHu0ackLnPhFpwxGdOZ8_7B02T3VN5PSovdD5R1Kw6VmDzDhqysUVH9LAXX81ADuBFPfJUg-o6o3O-g-GOekYHQ_qrVvyusZPw9fvwQNpYGGhdBYhszwXJucPlZx5_AMiBro8OQFPj8O3oE7q7yeuE-njQIiAWIK4FtaslAImwdPGrFWHfIQ2igOLyUHcUQwNMGHPMUVNDG5QvbaN7qdOdyvSEOE7ou7mc9Gx3oBO6oKRlxyFTn9_H3hezMFSK4g=w1720-h1162',
    0
);

const SIL_COD_8 = new Producto(
    'Silla Soler',
    24,
    'Idear Home',
    'sillas',
    'MATERIALIDAD Realizada en Metal mate. Apilables. . MEDIDAS Altura: 84cm Largo: 45cm Profundidad: 50cm Altura de asiento: 44cm',
    11890,
    25,
    'https://lh3.googleusercontent.com/fife/AAWUweXrc1rB83cnoGMan7BnfRiCsoc1jHL0lBKW-DY_BufmboR3rgSw7tHyZhvM6GIhoaGVjaxF1oKWyGlCxK7sGQ_unnH05dWQ6AuvpRh9lOsU3dfjJuLzshPGFAa_xZM-lIC2isfswsN0VuGix1kuAwvRCrpTAUkY6Z26RA3cKPIVaPdLVnr2a7JPSz6pX-GlqRL85AFT5I83Dk4YY38D9YtZHWCxYu1Z-k7GD6I5av-5X6iqTeqQ9R1k1Lp2llZOrIrl1dvGFiaeneeHGtSlxV7VyXvhRpaOT7BTXxwYBwm13F-0OUX15MoHrj3ScaIMHhUS8G9UEbIn37MHts-DWVchMhGaoMP4TTBHZVYaMsVgq8NwmAgmwgMT9VShZB69Oyv58symB8XiP0Q4BZVw2s_x1BPjIOHcfMPP4NKgGtUc6Do-mVq8m65wqEUBnuT1Q5qPW_K8oilN8jj1Hq0Scgnus2YrulcL4rYsZRIAnMJSM6hcQDkpXT_ZhSctaDBTQeGspJ7GCjmQ101gw-_UWtE7LRu7PeVaPIYGi6WRThbN0CYJsi-daqm8fPHrsjpowNM2jQ9M2Nju1QkmT7mAJi7ILPWjQjRISz-2OC7u5Y76cAyqGI0h2y16FeIMNmUe1oDO4pqLwReCI_XZ-BPRdgx1pKDzrKSsjuwuG5tAANwdXqX7j9dABBeBU9kk4zf2D_iHa9QuDcgFQQo3ZCcC7jGV3sUZSr4vde-ub5N0lN3B0m2g9YYz705Zde5-S7_xTwFHTW-vNJDTJAeoKJoLHVfsnKVAN6MYQF6mc69_AQ0lMg=w1720-h1162',
    0
);

// Declaración de array de todos mis productos
const productos = [EST_COD_1, EST_COD_2, EST_COD_3, EST_COD_4, EST_COD_5, EST_COD_6, EST_COD_7, EST_COD_8, MES_COD_1, MES_COD_2, MES_COD_3, MES_COD_4, MES_COD_5, MES_COD_6, MES_COD_7, MES_COD_8, SIL_COD_1, SIL_COD_2, SIL_COD_3, SIL_COD_4, SIL_COD_5, SIL_COD_6, SIL_COD_7, SIL_COD_8];
